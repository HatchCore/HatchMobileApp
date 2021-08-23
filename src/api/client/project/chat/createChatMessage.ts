import { APIRequestHandler } from "src/api/handlers/APIHandler";
import ChatMutations from "src/api/schema/chat/Mutations";
import {
  ChatMessageFileInput,
  ChatMessageWithMetadata,
} from "src/api/types/APISchema";

interface CreateChatMessageResponse {
  createChatMessage: ChatMessageWithMetadata;
}

const createChatMessage = async (
  chatMessageId: string,
  userId: string,
  chatChannelId: string,
  chatMessage: string,
  chatAttachments: ChatMessageFileInput[]
): Promise<ChatMessageWithMetadata | null> => {
  const requestHandler = new APIRequestHandler<CreateChatMessageResponse>({
    operation: ChatMutations.createChatMessage,
    params: {
      chat_message_id: chatMessageId,
      user_id: userId,
      chat_channel_id: chatChannelId,
      chat_message: chatMessage,
      chat_attachments: chatAttachments,
    },
    nonNullableFields: [
      {
        operationName: "createChatMessage",
        notExistsErrorMessage: `Could not create chat message ${chatMessageId}`,
      },
    ],
  });
  const result = await requestHandler.handle();

  if (result) {
    const chatMessageResponse = result.createChatMessage;

    return chatMessageResponse;
  }

  return null;
};

export default createChatMessage;
