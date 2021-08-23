export default class CommonMutations {
  static createUserPushNotificationToken = /* GraphQL */ `
    mutation CreateUserPushNotificationToken(
      $user_id: ID!
      $push_notification_token: String!
    ) {
      createUserPushNotificationToken(
        user_id: $user_id
        push_notification_token: $push_notification_token
      ) {
        user_id
        push_notification_token
      }
    }
  `;
}
