export default class PreferencesQueries {
  static getProjectUserPreferences = /* GraphQL */ `
    query GetProjectUserPreferences($project_id: ID!, $user_id: ID!) {
      getProjectUserPreferences(project_id: $project_id, user_id: $user_id) {
        project_id
        user_id
        notify_when_collaborator_join
        notify_when_new_chat_message
        notify_when_new_feature_request
        notify_when_new_feedback_request
      }
    }
  `;

  static getUserPreferences = /* GraphQL */ `
    query GetUserPreferences($user_id: ID!) {
      getUserPreferences(user_id: $user_id) {
        user_id
        notify_when_new_release
      }
    }
  `;

  static getProjectUserPreferencesByUserId = /* GraphQL */ `
    query GetProjectUserPreferencesByUserId($user_id: ID!) {
      getProjectUserPreferencesByUserId(user_id: $user_id) {
        project_id
        project_name
        user_id
        notify_when_collaborator_join
        notify_when_new_chat_message
        notify_when_new_feature_request
        notify_when_new_feedback_request
      }
    }
  `;
}
