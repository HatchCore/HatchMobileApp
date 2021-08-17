export default class MetricsQueries {
  static getProjectMetrics = /* GraphQL */ `
    query ProjectMetrics($project_id: ID!, $time_bucket: String!) {
      getCollaboratorCountsPerProject(project_id: $project_id) {
        total_collaborators
      }
      getCollaboratorCountTimeSeriesPerProject(
        project_id: $project_id
        time_bucket: $time_bucket
      ) {
        date
        total_collaborators
      }
    }
  `;
}
