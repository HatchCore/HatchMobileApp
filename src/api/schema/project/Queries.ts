export default class ProjectQueries {
  static getProjectsWithReleaseMetadata = /* GraphQL */ `
    query GetProjectsWithReleaseMetadata {
      getProjectsWithReleaseMetadata {
        current_release_version
        latest_release_created_at
        num_collaborators
        collaborator_goal
        project_created_at
        project_description
        project_id
        project_name
        thumbnail_img_uri
      }
    }
  `;

  static getProjectNames = /* GraphQL */ `
    query GetProjectNames {
      getProjectNames
    }
  `;

  static getProjectOwner = /* GraphQL */ `
    query GetProjectOwner($user_id: ID!, $project_id: ID!) {
      getProjectOwner(project_id: $project_id, user_id: $user_id) {
        project_id
        user_id
        created_at
        updated_at
      }
    }
  `;

  static getProjectOwners = /* GraphQL */ `
    query GetProjectOwners($project_id: ID!) {
      getProjectOwners(project_id: $project_id) {
        created_at
        email
        first_name
        last_name
        phone_number
        profile_img_uri
        user_id
        updated_at
        username
      }
    }
  `;

  static getProjectsOwnedWithReleaseMetadata = /* GraphQL */ `
    query GetProjectsOwnedWithReleaseMetadata($user_id: ID!) {
      getProjectsOwnedWithReleaseMetadata(user_id: $user_id) {
        current_release_version
        latest_release_created_at
        num_collaborators
        collaborator_goal
        project_created_at
        project_description
        project_id
        project_name
        thumbnail_img_uri
      }
    }
  `;

  static getProjectsCollaboratedWithReleaseMetadata = /* GraphQL */ `
    query GetProjectsCollaboratedWithReleaseMetadata($user_id: ID!) {
      getProjectsCollaboratedWithReleaseMetadata(user_id: $user_id) {
        current_release_version
        latest_release_created_at
        num_collaborators
        collaborator_goal
        project_created_at
        project_description
        project_id
        project_name
        thumbnail_img_uri
      }
    }
  `;

  static getProjectsCollaboratedButNotOwnedWithReleaseMetadata = /* GraphQL */ `
    query GetProjectsCollaboratedButNotOwnedWithReleaseMetadata($user_id: ID!) {
      getProjectsCollaboratedButNotOwnedWithReleaseMetadata(user_id: $user_id) {
        current_release_version
        latest_release_created_at
        num_collaborators
        collaborator_goal
        project_created_at
        project_description
        project_id
        project_name
        thumbnail_img_uri
      }
    }
  `;

  static getProjectsOwned = /* GraphQL */ `
    query GetProjectsOwned($user_id: ID!) {
      getProjectsOwned(user_id: $user_id) {
        created_at
        current_release_version
        collaborator_goal
        project_description
        project_id
        project_name
        updated_at
      }
    }
  `;

  static getProjectsCollaborated = /* GraphQL */ `
    query GetProjectsCollaborated($user_id: ID!) {
      getProjectsCollaborated(user_id: $user_id) {
        created_at
        current_release_version
        collaborator_goal
        project_description
        project_id
        project_name
        updated_at
      }
    }
  `;

  static getProjectsCollaboratedButNotOwned = /* GraphQL */ `
    query GetProjectsCollaboratedButNotOwned($user_id: ID!) {
      getProjectsCollaboratedButNotOwned(user_id: $user_id) {
        created_at
        current_release_version
        collaborator_goal
        project_description
        project_id
        project_name
        updated_at
      }
    }
  `;

  static getProjectCollaborator = /* GraphQL */ `
    query GetProjectCollaborator($user_id: ID!, $project_id: ID!) {
      getProjectCollaborator(project_id: $project_id, user_id: $user_id) {
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

  static getProjectCollaborators = /* GraphQL */ `
    query GetProjectCollaborators($project_id: ID!) {
      getProjectCollaborators(project_id: $project_id) {
        created_at
        email
        first_name
        last_name
        phone_number
        updated_at
        profile_img_uri
        user_id
        username
      }
    }
  `;

  static getProjectCollaboratorsWithoutOwners = /* GraphQL */ `
    query GetProjectCollaboratorsWithoutOwners($project_id: ID!) {
      getProjectCollaboratorsWithoutOwners(project_id: $project_id) {
        created_at
        email
        first_name
        last_name
        phone_number
        updated_at
        profile_img_uri
        user_id
        username
      }
    }
  `;

  static getProjectById = /* GraphQL */ `
    query GetProject($project_id: ID!) {
      getProject(project_id: $project_id) {
        updated_at
        project_name
        project_id
        project_description
        collaborator_goal
        current_release_version
        created_at
      }
    }
  `;

  static getProjectByName = /* GraphQL */ `
    query GetProjectByName($project_name: String!) {
      getProjectByName(project_name: $project_name) {
        project_id
        current_release_version
        project_name
        project_description
        collaborator_goal
        archived_timestamp
        created_at
        updated_at
      }
    }
  `;

  static getProjectByNameWithReleaseMetadata = /* GraphQL */ `
    query GetProjectByNameWithReleaseMetadata($project_name: String!) {
      getProjectByNameWithReleaseMetadata(project_name: $project_name) {
        project_id
        current_release_version
        project_name
        project_description
        num_collaborators
        collaborator_goal
        thumbnail_img_uri
        project_created_at
        latest_release_created_at
      }
    }
  `;

  static getProjectWithReleaseMetadata = /* GraphQL */ `
    query GetProjectWithReleaseMetadata($project_id: ID!) {
      getProjectWithReleaseMetadata(project_id: $project_id) {
        project_id
        current_release_version
        project_name
        project_description
        num_collaborators
        collaborator_goal
        thumbnail_img_uri
        project_created_at
        latest_release_created_at
      }
    }
  `;

  static getProjectFeatureRequest = /* GraphQL */ `
    query GetProjectFeatureRequest($feature_request_id: ID!, $user_id: ID) {
      getProjectFeatureRequest(
        feature_request_id: $feature_request_id
        user_id: $user_id
      ) {
        created_at
        feature_request_id
        user_id
        owner_id
        project_id
        request_description
        request_title
        request_status
        updated_at
        negative_votes
        positive_votes
        user_vote
      }
    }
  `;

  static getProjectFeatureRequests = /* GraphQL */ `
    query GetProjectFeatureRequests($project_id: ID!, $user_id: ID) {
      getProjectFeatureRequests(project_id: $project_id, user_id: $user_id) {
        created_at
        feature_request_id
        user_id
        owner_id
        project_id
        request_description
        request_title
        request_status
        updated_at
        negative_votes
        positive_votes
        user_vote
      }
    }
  `;

  static getProjectFeatureRequestsByRequestStatus = /* GraphQL */ `
    query GetProjectFeatureRequestsByRequestStatus(
      $request_status: Int!
      $user_id: ID
    ) {
      getProjectFeatureRequestsByRequestStatus(
        request_status: $request_status
        user_id: $user_id
      ) {
        created_at
        feature_request_id
        user_id
        owner_id
        project_id
        request_description
        request_title
        request_status
        updated_at
        negative_votes
        positive_votes
        user_vote
      }
    }
  `;

  static getProjectFeatureRequestComments = /* GraphQL */ `
    query GetProjectFeatureRequestComments($section_id: ID!) {
      getProjectFeatureRequestComments(section_id: $section_id) {
        comment_id
        user_id
        section_id
        comment
        created_at
        updated_at
      }
    }
  `;

  static getProjectFeedbackRequest = /* GraphQL */ `
    query GetProjectFeedbackRequest($feedback_request_id: ID!) {
      getProjectFeedbackRequest(feedback_request_id: $feedback_request_id) {
        created_at
        feedback_request_id
        user_id
        project_id
        request_description
        request_img_uri
        request_link_url
        request_title
        updated_at
      }
    }
  `;

  static getProjectFeedbackRequests = /* GraphQL */ `
    query GetProjectFeedbackRequests($project_id: ID!) {
      getProjectFeedbackRequests(project_id: $project_id) {
        created_at
        feedback_request_id
        user_id
        project_id
        request_description
        request_img_uri
        request_link_url
        request_title
        updated_at
      }
    }
  `;

  static getProjectFeedbackRequestComments = /* GraphQL */ `
    query GetProjectFeedbackRequestComments($section_id: ID!) {
      getProjectFeedbackRequestComments(section_id: $section_id) {
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
