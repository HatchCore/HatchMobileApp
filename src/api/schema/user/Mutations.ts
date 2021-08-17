export default class UserMutations {
  static createUser = /* GraphQL */ `
    mutation CreateUser(
      $user_id: ID!
      $email: String!
      $firstName: String!
      $lastName: String!
      $username: String!
      $phoneNumber: String
      $profileImgUri: String
    ) {
      createUser(
        user_id: $user_id
        email: $email
        first_name: $firstName
        last_name: $lastName
        phone_number: $phoneNumber
        username: $username
        profile_img_uri: $profileImgUri
      ) {
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

  static deleteUser = /* GraphQL */ `
    mutation DeleteUser($user_id: ID!) {
      deleteUser(user_id: $user_id) {
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

  static updateUser = /* GraphQL */ `
    mutation updateUser(
      $user_id: ID!
      $email: String!
      $firstName: String!
      $lastName: String!
      $username: String!
      $phoneNumber: String
      $profileImgUri: String
    ) {
      updateUser(
        user_id: $user_id
        email: $email
        first_name: $firstName
        last_name: $lastName
        phone_number: $phoneNumber
        username: $username
        profile_img_uri: $profileImgUri
      ) {
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
}
