export default class UserQueries {
  static getUserByUsername = /* GraphQL */ `
    query GetUserByUsername($username: String!) {
      getUserByUsername(username: $username) {
        email
        first_name
        last_name
        phone_number
        profile_img_uri
        user_id
        username
        created_at
        updated_at
      }
    }
  `;

  static getUserByUserId = /* GraphQL */ `
    query GetUserByUserId($user_id: ID!) {
      getUserByUserId(user_id: $user_id) {
        created_at
        username
        user_id
        updated_at
        profile_img_uri
        last_name
        first_name
        email
        phone_number
      }
    }
  `;

  static getAllUsersExcept = /* GraphQL */ `
    query GetAllUsersExcept($user_ids: [ID!]) {
      getAllUsersExcept(user_ids: $user_ids) {
        created_at
        email
        first_name
        phone_number
        last_name
        profile_img_uri
        updated_at
        user_id
        username
      }
    }
  `;

  static getUserByEmail = /* GraphQL */ `
    query GetUserByEmail($email: String!) {
      getUserByEmail(email: $email) {
        email
        first_name
        last_name
        phone_number
        profile_img_uri
        user_id
        username
        created_at
        updated_at
      }
    }
  `;

  static getCollaboratorScore = /* GraphQL */ `
    query GetCollaboratorScore($project_id: ID!, $user_id: ID!) {
      getCollaboratorScore(project_id: $project_id, user_id: $user_id)
    }
  `;
}
