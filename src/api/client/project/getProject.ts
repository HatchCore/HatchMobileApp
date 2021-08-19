import { APIRequestHandler } from "src/api/handlers/APIHandler";
import ProjectQueries from "src/api/schema/project/Queries";
import { Project } from "src/api/types/APISchema";

interface GetProjectByIdResponse {
  getProject: Project;
}

const getProject = async (projectId: string): Promise<Project | null> => {
  const requestHandler = new APIRequestHandler<GetProjectByIdResponse>({
    operation: ProjectQueries.getProject,
    params: { project_id: projectId },
    nonNullableFields: [
      {
        operationName: "getProject",
        notExistsErrorMessage: `No project found with id ${projectId}`,
      },
    ],
  });
  const result = await requestHandler.handle();

  if (result) {
    const project = result.getProject;

    return project;
  }

  return null;
};

export default getProject;
