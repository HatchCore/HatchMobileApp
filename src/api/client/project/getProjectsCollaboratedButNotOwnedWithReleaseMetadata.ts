import { APIRequestHandler } from "src/api/handlers/APIHandler";
import ProjectQueries from "src/api/schema/project/Queries";
import { ProjectWithReleaseMetadata } from "src/api/types/APISchema";

interface getProjectsCollaboratedButNotOwnedWithReleaseMetadataResponse {
  getProjectsCollaboratedButNotOwnedWithReleaseMetadata: ProjectWithReleaseMetadata[];
}

const getProjectsCollaboratedButNotOwnedWithReleaseMetadata = async (
  userId: string
): Promise<ProjectWithReleaseMetadata[]> => {
  const requestHandler =
    new APIRequestHandler<getProjectsCollaboratedButNotOwnedWithReleaseMetadataResponse>(
      {
        operation:
          ProjectQueries.getProjectsCollaboratedButNotOwnedWithReleaseMetadata,
        params: {
          user_id: userId,
        },
        nonNullableFields: undefined,
      }
    );
  const result = await requestHandler.handle();

  if (result) {
    const projectsCollaborated =
      result.getProjectsCollaboratedButNotOwnedWithReleaseMetadata;

    return projectsCollaborated;
  }

  return [];
};

export default getProjectsCollaboratedButNotOwnedWithReleaseMetadata;
