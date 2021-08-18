import { APIRequestHandler } from "src/api/handlers/APIHandler";
import ProjectQueries from "src/api/schema/project/Queries";
import { ProjectWithReleaseMetadata } from "src/api/types/APISchema";

interface getProjectsOwnedWithReleaseMetadataResponse {
  getProjectsOwnedWithReleaseMetadata: ProjectWithReleaseMetadata[];
}

const getProjectsOwnedWithReleaseMetadata = async (
  userId: string
): Promise<ProjectWithReleaseMetadata[]> => {
  const requestHandler =
    new APIRequestHandler<getProjectsOwnedWithReleaseMetadataResponse>({
      operation: ProjectQueries.getProjectsOwnedWithReleaseMetadata,
      params: {
        user_id: userId,
      },
      nonNullableFields: undefined,
    });
  const result = await requestHandler.handle();

  if (result) {
    const projectsOwned = result.getProjectsOwnedWithReleaseMetadata;

    return projectsOwned;
  }

  return [];
};

export default getProjectsOwnedWithReleaseMetadata;
