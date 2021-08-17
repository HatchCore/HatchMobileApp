import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLError } from "graphql/error/GraphQLError";
import Observable, { ZenObservable } from "zen-observable-ts";

import { SubscriptionResponse } from "src/api/types/SubscriptionResponse";

export interface SubscriptionRequestParams<T> {
  operation: string;
  params: any;
  nextHandler?: (response: SubscriptionResponse<T>) => void;
  errorHandler?: (error: GraphQLError) => {};
}

export class SubscriptionRequestHandler<T extends object> {
  request: SubscriptionRequestParams<T>;

  constructor(request: SubscriptionRequestParams<T>) {
    this.request = request;
  }

  begin = (): ZenObservable.Subscription => {
    const { operation, params, nextHandler, errorHandler } = this.request;

    const gqlQuery = graphqlOperation(operation, params);
    const authorizedGqlQuery = {
      ...gqlQuery,
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    };

    const response = API.graphql(authorizedGqlQuery) as Observable<
      SubscriptionResponse<T>
    >;

    const subscription = response.subscribe({
      next: nextHandler,
      error: errorHandler,
    });

    return subscription;
  };
}
