export default class ProjectReleaseQueries {
  static getProjectRelease = /* GraphQL */ `
    query GetProjectRelease($project_id: ID!, $release_version: Int!) {
      getProjectRelease(
        project_id: $project_id
        release_version: $release_version
      ) {
        accent_message
        accent_title
        created_at
        jumbotron_button_text
        jumbotron_button_url
        jumbotron_img_uri
        jumbotron_message
        jumbotron_title
        logo_img_uri
        project_id
        release_description
        release_name
        release_version
        updated_at
        thumbnail_img_uri
        features {
          feature_message
          feature_title
          img_uri
          project_id
          release_version
          feature_index
        }
        footers {
          footer_text
          footer_url
          project_id
          release_version
          footer_index
        }
      }
    }
  `;
}
