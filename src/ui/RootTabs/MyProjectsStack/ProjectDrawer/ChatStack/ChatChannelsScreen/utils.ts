import { ChatChannel, ChatChannelMetadata } from "src/api/types/APISchema";

import {
  ChatChannelIdMap,
  ChatChannelMapGroups,
  ChatChannelNameMap,
} from "./types";

export namespace ChatChannelsScreenUtils {
  export const splitChatChannelsIntoMapGroups = (
    chatChannels: ChatChannelMetadata[] | ChatChannel[]
  ): ChatChannelMapGroups => {
    const chatChannelMapGroups = {
      allChannelIdMap: {} as ChatChannelIdMap,
      allChannelNameMap: {} as ChatChannelNameMap,
      privateChannelIdMap: {} as ChatChannelIdMap,
      publicChannelIdMap: {} as ChatChannelIdMap,
      directMessageChannelIdMap: {} as ChatChannelIdMap,
    };

    chatChannels.forEach((chatChannel) => {
      switch (chatChannel.channel_type) {
        case 0:
          chatChannelMapGroups.directMessageChannelIdMap[
            chatChannel.chat_channel_id
          ] = chatChannel;
          break;
        case 1:
          chatChannelMapGroups.publicChannelIdMap[chatChannel.chat_channel_id] =
            chatChannel;
          break;
        case 2:
          chatChannelMapGroups.privateChannelIdMap[
            chatChannel.chat_channel_id
          ] = chatChannel;
          break;
        default:
          // eslint-disable-next-line no-case-declarations
          const errorMessage = `Unrecognized channel type: ${
            chatChannel.channel_type
          } for chat channel: ${JSON.stringify(chatChannel, null, 2)}`;
          throw new Error(errorMessage);
      }
      chatChannelMapGroups.allChannelIdMap[chatChannel.chat_channel_id] =
        chatChannel;
      chatChannelMapGroups.allChannelNameMap[chatChannel.channel_name] =
        chatChannel;
    });

    return chatChannelMapGroups;
  };
}
