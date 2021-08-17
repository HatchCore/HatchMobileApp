import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { GraphQLError } from "graphql/error/GraphQLError";

import { EntityDoesNotExistError } from "src/api/handlers/Errors";

interface NonNullableField {
  operationName: string;
  notExistsErrorMessage: string;
}

export interface APIRequestParams {
  operation: string;
  params: any;
  nonNullableFields?: NonNullableField[];
  loginRequired?: boolean;
}

export class APIRequestHandler<T extends { [key: string]: any }> {
  request: APIRequestParams;

  constructor(request: APIRequestParams) {
    this.request = request;
    // TODO: I'm not sure if this is the best or even the right way to do this
    // I'm force setting the credentials to the specific Auth instance.
    // For some reason it's not reading the arguments from Amplify.configure so
    // this is my last resort. Following the documentation at next link does not work
    // https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource
    // See source code at
    // https://github.com/aws-amplify/amplify-js/blob/40cc22f8b332e4748c85504ca8e2ac2713fd87d1/packages/core/src/Credentials.ts
    Auth.Credentials.configure({
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
      identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
    });
  }

  // NOTE: This method can throw an error if loginRequired and will return null.
  // This handling is delegated to the class which calls .handle()
  handle = async (): Promise<T | null> => {
    const { operation, params, nonNullableFields, loginRequired } =
      this.request;

    console.debug(`Handling API request: ${operation}`);
    console.debug(`Params: ${JSON.stringify(params, null, 2)}`);

    try {
      const gqlQuery = graphqlOperation(operation, params);
      let response;
      // NOTE: This is done from reading the Amplify source code.
      // This isn't a very documented way of doing this so it may
      // break if there are breaking changes in Amplify.
      // Confirmed working for Amplify@3.3.23

      if (loginRequired) {
        // authMode is expected to be GRAPHQL_AUTH_MODE but I've overwritten it.
        // Must ignore ts compiler error as Amplify will not add auth header
        // if the option is not one of GRAPHQL_AUTH_MODE
        // See https://github.com/aws-amplify/amplify-js/blob/df95ea3724eb6406f64b03f25086cd3e8644cb5f/packages/api/src/API.ts
        const authorizedGqlQuery = {
          ...gqlQuery,
          authMode: "NONE",
        };

        // TODO: Check for security implications of this. I think it should be fine?
        // There should be no reason why sending the token to an API we trust is unsafe
        const authHeaders = {
          Authorization: (await Auth.currentSession())
            .getIdToken()
            .getJwtToken(),
        };

        response = (await API.graphql(
          // @ts-ignore
          authorizedGqlQuery,
          authHeaders
        )) as GraphQLResult<T>;
      } else {
        // grab unauth user from Cognito if not signed in
        try {
          await Auth.currentCredentials();
        } catch (e) {
          console.debug("error:", e);
        }

        const authorizedGqlQuery = {
          ...gqlQuery,
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        };

        response = (await API.graphql(authorizedGqlQuery)) as GraphQLResult<T>;
      }

      console.debug(`Result: ${JSON.stringify(response, null, 2)}`);

      this.checkNonNullableFields(nonNullableFields, response.data);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (result) {
      console.debug("Caught:", result);
      const { errors } = result;

      if (errors) {
        errors.map((error: GraphQLError) => {
          throw error;
        });
      }
    }

    return null;
  };

  checkNonNullableFields = (
    nonNullableFields: NonNullableField[] | undefined,
    responseData: T | undefined
  ): void => {
    if (nonNullableFields) {
      nonNullableFields.forEach((nonNullableField: NonNullableField) => {
        if (responseData && !responseData[nonNullableField.operationName]) {
          throw new EntityDoesNotExistError(
            nonNullableField.notExistsErrorMessage
          );
        }
      });
    }
  };
}
