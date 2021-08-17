export namespace ProjectReviewMutations {
  export const createOrUpdateProjectReview = /* GraphQL */ `
    mutation CreateOrUpdateProjectReview(
      $user_id: ID!
      $project_id: ID!
      $experience_rating: Int
      $compatibility_rating: Int
      $product_rating: Int
      $review_text: String
    ) {
      createOrUpdateProjectReview(
        project_id: $project_id
        user_id: $user_id
        compatibility_rating: $compatibility_rating
        experience_rating: $experience_rating
        product_rating: $product_rating
        review_text: $review_text
      ) {
        compatibility_rating
        created_at
        experience_rating
        last_name
        product_rating
        profile_img_uri
        project_id
        review_text
        updated_at
        user_id
        username
        first_name
      }
    }
  `;
}

export namespace ProjectReviewQueries {
  export const getProjectReview = /* GraphQL */ `
    query GetProjectReview($user_id: ID!, $project_id: ID!) {
      getProjectReview(project_id: $project_id, user_id: $user_id) {
        compatibility_rating
        created_at
        experience_rating
        first_name
        last_name
        product_rating
        profile_img_uri
        project_id
        review_text
        updated_at
        user_id
        username
      }
    }
  `;

  export const getProjectReviewsForProject = /* GraphQL */ `
    query GetProjectReviewsForProject($project_id: ID!) {
      getProjectReviewsForProject(project_id: $project_id) {
        compatibility_rating
        created_at
        experience_rating
        first_name
        last_name
        product_rating
        profile_img_uri
        review_text
        project_id
        updated_at
        user_id
        username
      }
    }
  `;

  export const getProjectReviewsForProjectNotOwnedByUser = /* GraphQL */ `
    query GetProjectReviewsForProjectNotOwnedByUser(
      $user_id: ID!
      $project_id: ID!
    ) {
      getProjectReviewsForProjectNotOwnedByUser(
        user_id: $user_id
        project_id: $project_id
      ) {
        compatibility_rating
        created_at
        experience_rating
        first_name
        last_name
        product_rating
        profile_img_uri
        review_text
        project_id
        updated_at
        user_id
        username
      }
    }
  `;
}
