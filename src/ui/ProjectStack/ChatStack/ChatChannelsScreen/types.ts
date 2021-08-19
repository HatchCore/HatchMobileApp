import { ChatChannel, ChatChannelMetadata } from "src/api/types/APISchema";

export interface ChatChannelIdMap {
  [chatChannelId: string]: ChatChannel | ChatChannelMetadata;
}

export interface ChatChannelNameMap {
  [chatChannelName: string]: ChatChannel | ChatChannelMetadata;
}

export interface ChatChannelMapGroups {
  allChannelIdMap: ChatChannelIdMap;
  allChannelNameMap: ChatChannelNameMap;
  privateChannelIdMap: ChatChannelIdMap;
  publicChannelIdMap: ChatChannelIdMap;
  directMessageChannelIdMap: ChatChannelIdMap;
}
