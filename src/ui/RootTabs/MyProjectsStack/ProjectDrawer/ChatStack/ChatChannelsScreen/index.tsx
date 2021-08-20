import React, { useEffect, useState } from "react";

import { StyleSheet, TextStyle, View } from "react-native";

import { getChatChannelMetadataForUser } from "src/api/client/project/chat";
import { Project, User } from "src/api/types/APISchema";
import { PADDING } from "src/styles/common/spacing";
import { FONT_SIZE, FONT_WEIGHT } from "src/styles/common/typography";
import { CONTAINER } from "src/styles/layout/container";

import ChannelSection from "./components/ChannelSection";
import {
  ChatChannelIdMap,
  ChatChannelMapGroups,
  ChatChannelNameMap,
} from "./types";
import { ChatChannelsScreenUtils } from "./utils";

const styles = StyleSheet.create({
  page: {
    ...CONTAINER.PAGE,
  },
  sectionHeader: {
    ...FONT_SIZE.H3,
    ...FONT_WEIGHT.BOLD,
  } as TextStyle,
  section: {
    paddingBottom: PADDING.S,
  },
  channelListItem: {},
});

interface ChatChannelsScreenProps {
  project: Project | null;
  user: User | null;
}

const ChatChannelsScreen: React.FunctionComponent<ChatChannelsScreenProps> = (
  props: ChatChannelsScreenProps
) => {
  const { project, user } = props;

  // const [chatChannels, setChatChannels] = useState<ChatChannelMetadata[]>([]);
  const [chatChannelMapGroups, setChatChannelMapGroups] =
    useState<ChatChannelMapGroups>({
      allChannelIdMap: {} as ChatChannelIdMap,
      allChannelNameMap: {} as ChatChannelNameMap,
      privateChannelIdMap: {} as ChatChannelIdMap,
      publicChannelIdMap: {} as ChatChannelIdMap,
      directMessageChannelIdMap: {} as ChatChannelIdMap,
    });

  useEffect(() => {
    if (project && user) {
      const fetchChatChannels = async () => {
        const chatChannelsWithMetadata = await getChatChannelMetadataForUser(
          project.project_id,
          user.username
        );

        // setChatChannels(chatChannelsWithMetadata);
        const chatChannelGroups =
          ChatChannelsScreenUtils.splitChatChannelsIntoMapGroups(
            chatChannelsWithMetadata
          );

        setChatChannelMapGroups(chatChannelGroups);

        console.log("CHANNEL GROUPS");
        console.log(chatChannelGroups);
      };

      fetchChatChannels();
    }
  }, [project, user]);
  return (
    <View style={styles.page}>
      <ChannelSection
        name="Public Channels"
        chatChannelIdMap={chatChannelMapGroups.publicChannelIdMap}
      />
      <ChannelSection
        name="Private Channels"
        chatChannelIdMap={chatChannelMapGroups.privateChannelIdMap}
      />
      <ChannelSection
        name="Direct Messages"
        chatChannelIdMap={chatChannelMapGroups.directMessageChannelIdMap}
      />
    </View>
  );
};

export default ChatChannelsScreen;
