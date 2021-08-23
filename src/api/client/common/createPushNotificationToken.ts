import { APIRequestHandler } from "src/api/handlers/APIHandler";
import CommonMutations from "src/api/schema/common/Mutations";
import { UserPushNotificationToken } from "src/api/types/APISchema";

interface CreateUserPushNotificationTokenResponse {
  createUserPushNotificationToken: UserPushNotificationToken;
}

const createUserPushNotificationToken = async (
  userId: string | undefined,
  pushNotificationToken: string | undefined
): Promise<UserPushNotificationToken | null> => {
  if (!userId || !pushNotificationToken) return null;
  const requestHandler =
    new APIRequestHandler<CreateUserPushNotificationTokenResponse>({
      operation: CommonMutations.createUserPushNotificationToken,
      params: {
        user_id: userId,
        push_notification_token: pushNotificationToken,
      },
      nonNullableFields: [
        {
          operationName: "createUserPushNotificationToken",
          notExistsErrorMessage: `Could not store push notification token ${pushNotificationToken} for user ${userId}`,
        },
      ],
    });
  const result = await requestHandler.handle();

  if (result) {
    const userPushNotificationToken = result.createUserPushNotificationToken;

    return userPushNotificationToken;
  }

  return null;
};

export default createUserPushNotificationToken;
