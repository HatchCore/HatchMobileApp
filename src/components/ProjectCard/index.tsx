import React from "react";

// @ts-ignore
import { S3Image } from "aws-amplify-react-native";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

import { ProjectWithReleaseMetadata } from "src/api/types/APISchema";
import ViewMoreButton from "src/components/ViewMoreButton";
import { PADDING } from "src/styles/common/spacing";
import { THEME } from "src/styles/common/theme";
import { FONT_SIZE, FONT_WEIGHT } from "src/styles/common/typography";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: THEME.BORDER_RADIUS,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: PADDING.S,
    ...FONT_SIZE.H3,
    ...FONT_WEIGHT.BOLD,
  },
  buttonContainer: {
    padding: PADDING.S,
  },
});

interface ProjectCardProps {
  style?: ViewStyle;
  project: ProjectWithReleaseMetadata;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = (
  props: ProjectCardProps
) => {
  const { style, project } = props;

  return (
    <View style={[style, styles.card]}>
      <Text style={styles.title as TextStyle}>{project.project_name}</Text>
      <S3Image style={styles.image} imgKey={project.thumbnail_img_uri} />
      <View style={styles.buttonContainer}>
        <ViewMoreButton
          title="View Project"
          onPress={() => console.log("Go to chat")}
        />
      </View>
    </View>
  );
};

ProjectCard.defaultProps = {
  style: undefined,
};

export default ProjectCard;
