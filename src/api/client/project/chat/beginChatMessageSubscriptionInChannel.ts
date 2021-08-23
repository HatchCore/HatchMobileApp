import { GraphQLError } from "graphql/error/GraphQLError";

import { SubscriptionRequestHandler } from "src/api/handlers/SubscriptionHandler";
import ChatSubscriptions from "src/api/schema/chat/Subscriptions";
import { ChatMessageWithMetadata } from "src/api/types/APISchema";
import { SubscriptionResponse } from "src/api/types/SubscriptionResponse";

interface OnCreateChatMessageInChannelData<T> {
  onCreateChatMessageInChannel: T;
}

const beginChatMessageSubscriptionInChannel = (
  chatChannelId: string,
  responseHandler: (
    response: SubscriptionResponse<
      OnCreateChatMessageInChannelData<ChatMessageWithMetadata>
    >
  ) => void
) => {
  const subscriptionHandler = new SubscriptionRequestHandler<
    OnCreateChatMessageInChannelData<ChatMessageWithMetadata>
  >({
    operation: ChatSubscriptions.onCreateChatMessageInChannel,
    params: { chat_channel_id: chatChannelId },
    nextHandler: responseHandler,
    errorHandler: (error: GraphQLError) => {
      throw error;
    },
  });
  const subscriptionResult = subscriptionHandler.begin();

  return subscriptionResult;
};

export default beginChatMessageSubscriptionInChannel;
