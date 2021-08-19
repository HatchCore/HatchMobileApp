import React from "react";

import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { MARGIN } from "src/styles/common/spacing";
import { FONT_SIZE } from "src/styles/common/typography";

import { ChatChannelIdMap } from "../../types";
import ChannelListItem from "../ChannelListItem";
import SectionHeader from "../SectionHeader";

const styles = StyleSheet.create({
  section: {
    marginBottom: MARGIN.M,
  },
  header: {
    marginBottom: MARGIN.S,
  },
  name: {
    ...FONT_SIZE.P,
  } as TextStyle,
});

interface ChannelSectionProps {
  style?: ViewStyle;
  name: string;
  chatChannelIdMap: ChatChannelIdMap;
  activeChannelId?: string;
}

const ChannelSection: React.FunctionComponent<ChannelSectionProps> = (
  props: ChannelSectionProps
) => {
  const { style, name, chatChannelIdMap, activeChannelId } = props;

  return (
    <View style={[style, styles.section]}>
      <SectionHeader style={styles.header} name={name} />
      <View>
        {chatChannelIdMap &&
          Object.entries(chatChannelIdMap).map(([chatChannelId, channel]) => {
            return (
              <ChannelListItem
                name={channel.channel_name}
                active={activeChannelId === chatChannelId}
              />
            );
          })}
      </View>
    </View>
  );
};

ChannelSection.defaultProps = {
  style: undefined,
  activeChannelId: undefined,
};

export default ChannelSection;
