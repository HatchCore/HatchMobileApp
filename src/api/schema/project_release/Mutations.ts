export default class ProjectReleaseMutations {
  static createProjectRelease = /* GraphQL */ `
    mutation CreateProjectRelease(
      $project_id: ID!
      $release_version: Int!
      $release_name: String!
      $release_description: String!
      $logo_img_uri: String!
      $jumbotron_title: String!
      $jumbotron_message: String!
      $jumbotron_img_uri: String!
      $jumbotron_button_text: String!
      $jumbotron_button_url: String!
      $accent_title: String!
      $accent_message: String!
      $features: [ProjectReleaseFeatureInput!]
      $footers: [ProjectReleaseFooterInput!]
      $thumbnail_img_uri: String!
    ) {
      createProjectRelease(
        accent_message: $accent_message
        accent_title: $accent_title
        jumbotron_button_text: $jumbotron_button_text
        jumbotron_button_url: $jumbotron_button_url
        jumbotron_img_uri: $jumbotron_img_uri
        jumbotron_message: $jumbotron_message
        jumbotron_title: $jumbotron_title
        project_id: $project_id
        release_description: $release_description
        release_name: $release_name
        release_version: $release_version
        thumbnail_img_uri: $thumbnail_img_uri
        footers: $footers
        features: $features
        logo_img_uri: $logo_img_uri
      ) {
        accent_message
        accent_title
        created_at
        footers {
          footer_index
          footer_text
          project_id
          release_version
          footer_url
        }
        features {
          feature_index
          feature_message
          feature_title
          img_uri
          release_version
          project_id
        }
        jumbotron_button_text
        jumbotron_button_url
        jumbotron_img_uri
        updated_at
        thumbnail_img_uri
        release_version
        release_name
        release_description
        project_id
        logo_img_uri
        jumbotron_title
        jumbotron_message
      }
    }
  `;

  static updateProjectRelease = /* GraphQL */ `
    mutation UpdateProjectRelease(
      $project_id: ID!
      $release_version: Int!
      $release_name: String
      $release_description: String
      $logo_img_uri: String
      $jumbotron_title: String
      $jumbotron_message: String
      $jumbotron_img_uri: String
      $jumbotron_button_text: String
      $jumbotron_button_url: String
      $accent_title: String
      $accent_message: String
      $features: [ProjectReleaseFeatureInput]
      $footers: [ProjectReleaseFooterInput]
      $thumbnail_img_uri: String
    ) {
      updateProjectRelease(
        accent_message: $accent_message
        accent_title: $accent_title
        jumbotron_button_text: $jumbotron_button_text
        jumbotron_button_url: $jumbotron_button_url
        jumbotron_img_uri: $jumbotron_img_uri
        jumbotron_message: $jumbotron_message
        jumbotron_title: $jumbotron_title
        project_id: $project_id
        release_description: $release_description
        release_name: $release_name
        release_version: $release_version
        thumbnail_img_uri: $thumbnail_img_uri
        footers: $footers
        features: $features
        logo_img_uri: $logo_img_uri
      ) {
        accent_message
        accent_title
        created_at
        footers {
          footer_index
          footer_text
          project_id
          release_version
          footer_url
        }
        features {
          feature_index
          feature_message
          feature_title
          img_uri
          release_version
          project_id
        }
        jumbotron_button_text
        jumbotron_button_url
        jumbotron_img_uri
        updated_at
        thumbnail_img_uri
        release_version
        release_name
        release_description
        project_id
        logo_img_uri
        jumbotron_title
        jumbotron_message
      }
    }
  `;
}
