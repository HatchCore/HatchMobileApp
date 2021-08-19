import { APIRequestHandler } from "src/api/handlers/APIHandler";
import ChatQueries from "src/api/schema/chat/Queries";
import { ChatChannelMetadata } from "src/api/types/APISchema";

interface GetChatChannelMetadataForUserResponse {
  getChatChannelMetadataForUser: ChatChannelMetadata[];
}

const getChatChannelMetadataForUser = async (
  projectId: string,
  username: string
): Promise<ChatChannelMetadata[]> => {
  const requestHandler =
    new APIRequestHandler<GetChatChannelMetadataForUserResponse>({
      operation: ChatQueries.getChatChannelMetadataForUser,
      params: { project_id: projectId, username },
      nonNullableFields: [
        {
          operationName: "getChatChannelMetadataForUser",
          notExistsErrorMessage: `No chat channels found for project ${projectId} for user ${username}`,
        },
      ],
    });
  const result = await requestHandler.handle();

  if (result) {
    const chatChannelMetadata = result.getChatChannelMetadataForUser;

    return chatChannelMetadata;
  }

  return [];
};

export default getChatChannelMetadataForUser;
