export default class ProjectMutations {
  static createProject = /* GraphQL */ `
    mutation CreateProject(
      $project_id: ID!
      $user_id: ID!
      $project_name: String!
      $project_description: String!
      $collaborator_goal: Int!
      $current_release_version: Int
    ) {
      createProject(
        project_id: $project_id
        user_id: $user_id
        project_name: $project_name
        project_description: $project_description
        collaborator_goal: $collaborator_goal
        current_release_version: $current_release_version
      ) {
        project_id
        current_release_version
        project_name
        project_description
        collaborator_goal
        created_at
        updated_at
      }
    }
  `;

  static updateProject = /* GraphQL */ `
    mutation UpdateProject(
      $project_id: ID!
      $project_name: String!
      $project_description: String!
      $collaborator_goal: Int!
      $current_release_version: Int
    ) {
      updateProject(
        project_id: $project_id
        project_name: $project_name
        project_description: $project_description
        collaborator_goal: $collaborator_goal
        current_release_version: $current_release_version
      ) {
        project_id
        current_release_version
        project_name
        project_description
        collaborator_goal
        created_at
        updated_at
      }
    }
  `;

  static archiveProject = /* GraphQL */ `
    mutation ArchiveProject($project_id: ID!) {
      archiveProject(project_id: $project_id)
    }
  `;

  static createProjectFeatureRequest = /* GraphQL */ `
    mutation CreateProjectFeatureRequest(
      $feature_request_id: ID!
      $project_id: ID!
      $user_id: ID!
      $owner_id: ID
      $request_title: String!
      $request_description: String!
      $request_status: Int!
    ) {
      createProjectFeatureRequest(
        feature_request_id: $feature_request_id
        project_id: $project_id
        user_id: $user_id
        owner_id: $owner_id
        request_description: $request_description
        request_title: $request_title
        request_status: $request_status
      ) {
        created_at
        feature_request_id
        project_id
        user_id
        owner_id
        request_description
        request_title
        request_status
        updated_at
      }
    }
  `;

  static updateProjectFeatureRequest = /* GraphQL */ `
    mutation UpdateProjectFeatureRequest(
      $feature_request_id: ID!
      $project_id: ID!
      $user_id: ID!
      $owner_id: ID
      $request_title: String!
      $request_description: String!
      $request_status: Int!
    ) {
      updateProjectFeatureRequest(
        feature_request_id: $feature_request_id
        project_id: $project_id
        user_id: $user_id
        owner_id: $owner_id
        request_description: $request_description
        request_title: $request_title
        request_status: $request_status
      ) {
        created_at
        feature_request_id
        project_id
        user_id
        owner_id
        request_description
        request_title
        request_status
        updated_at
      }
    }
  `;

  static archiveProjectFeatureRequest = /* GraphQL */ `
    mutation ArchiveProjectFeatureRequest($feature_request_id: ID!) {
      archiveProjectFeatureRequest(feature_request_id: $feature_request_id)
    }
  `;

  static createOrUpdateProjectFeatureRequestVote = /* GraphQL */ `
    mutation CreateOrUpdateProjectFeatureRequestVote(
      $user_id: ID!
      $feature_request_id: ID!
      $feature_request_vote: Int
    ) {
      createOrUpdateProjectFeatureRequestVote(
        user_id: $user_id
        feature_request_id: $feature_request_id
        feature_request_vote: $feature_request_vote
      ) {
        created_at
        feature_request_id
        feature_request_vote
        updated_at
        user_id
      }
    }
  `;

  static createProjectFeedbackRequest = /* GraphQL */ `
    mutation CreateProjectFeedbackRequest(
      $feedback_request_id: ID!
      $project_id: ID!
      $user_id: ID!
      $request_title: String!
      $request_description: String!
      $request_img_uri: String
      $request_link_url: String!
    ) {
      createProjectFeedbackRequest(
        feedback_request_id: $feedback_request_id
        project_id: $project_id
        user_id: $user_id
        request_description: $request_description
        request_title: $request_title
        request_img_uri: $request_img_uri
        request_link_url: $request_link_url
      ) {
        created_at
        feedback_request_id
        project_id
        user_id
        request_description
        request_img_uri
        request_link_url
        request_title
        updated_at
      }
    }
  `;

  static updateProjectFeedbackRequest = /* GraphQL */ `
    mutation UpdateProjectFeedbackRequest(
      $feedback_request_id: ID!
      $project_id: ID!
      $user_id: ID!
      $request_title: String!
      $request_description: String!
      $request_img_uri: String
      $request_link_url: String!
    ) {
      updateProjectFeedbackRequest(
        feedback_request_id: $feedback_request_id
        project_id: $project_id
        user_id: $user_id
        request_description: $request_description
        request_title: $request_title
        request_img_uri: $request_img_uri
        request_link_url: $request_link_url
      ) {
        created_at
        feedback_request_id
        project_id
        user_id
        request_description
        request_img_uri
        request_link_url
        request_title
        updated_at
      }
    }
  `;

  static archiveProjectFeedbackRequest = /* GraphQL */ `
    mutation ArchiveProjectFeedbackRequest($feedback_request_id: ID!) {
      archiveProjectFeedbackRequest(feedback_request_id: $feedback_request_id)
    }
  `;

  static createProjectOwnerByUsername = /* GraphQL */ `
    mutation CreateProjectOwnerByUsername(
      $project_id: ID!
      $username: String!
    ) {
      createProjectOwnerByUsername(
        project_id: $project_id
        username: $username
      ) {
        created_at
        email
        first_name
        last_name
        phone_number
        profile_img_uri
        updated_at
        user_id
        username
      }
    }
  `;

  static createProjectCollaborator = /* GraphQL */ `
    mutation CreateProjectCollaborator($project_id: ID!, $user_id: ID!) {
      createProjectCollaborator(project_id: $project_id, user_id: $user_id) {
        created_at
        project_id
        updated_at
        user_id
      }
    }
  `;

  static deleteProjectCollaborator = /* GraphQL */ `
    mutation DeleteProjectCollaborator($project_id: ID!, $user_id: ID!) {
      deleteProjectCollaborator(project_id: $project_id, user_id: $user_id) {
        created_at
        email
        first_name
        last_name
        phone_number
        profile_img_uri
        updated_at
        user_id
        username
      }
    }
  `;

  static deleteProjectOwner = /* GraphQL */ `
    mutation DeleteProjectOwner($project_id: ID!, $user_id: ID!) {
      deleteProjectOwner(project_id: $project_id, user_id: $user_id) {
        created_at
        email
        first_name
        last_name
        phone_number
        profile_img_uri
        updated_at
        user_id
        username
      }
    }
  `;

  static updateProjectUserActivity = /* GraphQL */ `
    mutation UpdateProjectUserActivity($project_id: ID!, $user_id: ID!) {
      updateProjectUserActivity(project_id: $project_id, user_id: $user_id) {
        project_id
        user_id
        last_activity
      }
    }
  `;

  static createProjectFeatureRequestComment = /* GraphQL */ `
    mutation CreateProjectFeatureRequestComment(
      $comment_id: ID!
      $user_id: ID!
      $section_id: ID!
      $comment: String!
    ) {
      createProjectFeatureRequestComment(
        comment_id: $comment_id
        user_id: $user_id
        section_id: $section_id
        comment: $comment
      ) {
        comment_id
        user_id
        section_id
        comment
        created_at
        updated_at
      }
    }
  `;

  static createProjectFeedbackRequestComment = /* GraphQL */ `
    mutation CreateProjectFeedbackRequestComment(
      $comment_id: ID!
      $user_id: ID!
      $section_id: ID!
      $comment: String!
    ) {
      createProjectFeedbackRequestComment(
        comment_id: $comment_id
        user_id: $user_id
        section_id: $section_id
        comment: $comment
      ) {
        comment_id
        user_id
        section_id
        comment
        created_at
        updated_at
      }
    }
  `;
}
