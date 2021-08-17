export default class PreferencesMutations {
  static updateProjectUserPreferences = /* GraphQL */ `
    mutation UpdateProjectUserPreferences(
      $project_id: ID!
      $user_id: ID!
      $notify_when_collaborator_join: Boolean!
      $notify_when_new_chat_message: Boolean!
      $notify_when_new_feature_request: Boolean!
      $notify_when_new_feedback_request: Boolean!
    ) {
      updateProjectUserPreferences(
        project_id: $project_id
        user_id: $user_id
        notify_when_collaborator_join: $notify_when_collaborator_join
        notify_when_new_chat_message: $notify_when_new_chat_message
        notify_when_new_feature_request: $notify_when_new_feature_request
        notify_when_new_feedback_request: $notify_when_new_feedback_request
      ) {
        project_id
        user_id
        notify_when_collaborator_join
        notify_when_new_chat_message
        notify_when_new_feature_request
        notify_when_new_feedback_request
      }
    }
  `;

  static updateUserPreferences = /* GraphQL */ `
    mutation UpdateUserPreferences(
      $user_id: ID!
      $notify_when_new_release: Boolean!
    ) {
      updateUserPreferences(
        user_id: $user_id
        notify_when_new_release: $notify_when_new_release
      ) {
        user_id
        notify_when_new_release
      }
    }
  `;
}
