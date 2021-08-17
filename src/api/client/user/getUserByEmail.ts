import { APIRequestHandler } from "src/api/handlers/APIHandler";
import UserQueries from "src/api/schema/user/Queries";
import { User } from "src/api/types/APISchema";

interface GetUserByEmailResponse {
  getUserByEmail: User;
}

const getUserByEmail = async (email: string): Promise<User | null> => {
  const requestHandler = new APIRequestHandler<GetUserByEmailResponse>({
    operation: UserQueries.getUserByEmail,
    params: { email },
    nonNullableFields: [
      {
        operationName: "getUserByEmail",
        notExistsErrorMessage: `User with email ${email} does not exist`,
      },
    ],
  });
  const result = await requestHandler.handle();

  if (!result) {
    return null;
  }

  const user = result.getUserByEmail;

  return user;
};

export default getUserByEmail;
