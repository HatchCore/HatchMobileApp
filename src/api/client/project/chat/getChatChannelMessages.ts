import { APIRequestHandler } from "src/api/handlers/APIHandler";
import ChatQueries from "src/api/schema/chat/Queries";
import { ChatMessageWithMetadata } from "src/api/types/APISchema";

interface GetChatChannelMessagesResponse {
  getChatChannelMessages: ChatMessageWithMetadata[];
}

const getChatChannelMessages = async (
  chatChannelId: string,
  latestTime: string | null = null,
  numMessages: number = 30
): Promise<ChatMessageWithMetadata[]> => {
  const requestHandler = new APIRequestHandler<GetChatChannelMessagesResponse>({
    operation: ChatQueries.getChatChannelMessages,
    params: {
      chat_channel_id: chatChannelId,
      latest_time: latestTime,
      num_messages: numMessages,
    },
    nonNullableFields: undefined,
  });
  const result = await requestHandler.handle();

  if (result) {
    const chatMessages = result.getChatChannelMessages;

    return chatMessages;
  }

  return [];
};

export default getChatChannelMessages;
