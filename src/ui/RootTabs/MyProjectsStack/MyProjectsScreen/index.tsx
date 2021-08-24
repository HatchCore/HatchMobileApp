import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";

import {
  getProjectsCollaboratedButNotOwnedWithReleaseMetadata,
  getProjectsOwnedWithReleaseMetadata,
} from "src/api/client/project";
import { ProjectWithReleaseMetadata, User } from "src/api/types/APISchema";
import ProjectCard from "src/components/ProjectCard";
import Stacks from "src/constants/Navigators";
import Navigators from "src/constants/Navigators";
import { MARGIN } from "src/styles/common/spacing";
import { CONTAINER } from "src/styles/layout/container";

const styles = StyleSheet.create({
  page: CONTAINER.PAGE,
  card: {
    marginBottom: MARGIN.M,
  },
});

interface MyProjectProps {
  user: User | null;
}

const MyProjectsScreen: React.FunctionComponent<MyProjectProps> = (
  props: MyProjectProps
) => {
  const { user } = props;

  const navigation = useNavigation();
  const [projectsOwned, setProjectsOwned] = useState<
    ProjectWithReleaseMetadata[]
  >([]);
  const [projectsCollaborated, setProjectsCollaborated] = useState<
    ProjectWithReleaseMetadata[]
  >([]);

  useEffect(() => {
    if (user) {
      const fetchProjectsOwned = async () => {
        const [owned, collaborated] = await Promise.all([
          getProjectsOwnedWithReleaseMetadata(user.user_id),
          getProjectsCollaboratedButNotOwnedWithReleaseMetadata(user.user_id),
        ]);

        console.log("Owned");
        console.log(owned);
        setProjectsOwned(owned);
        setProjectsCollaborated(collaborated);
      };

      fetchProjectsOwned();
    }
  }, [user]);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={styles.page}>
          {projectsOwned.map((project) => {
            return (
              <ProjectCard
                key={project.project_id}
                style={styles.card}
                project={project}
                handleViewProject={() =>
                  navigation.navigate(Navigators.PROJECT, {
                    projectId: project.project_id,
                  })
                }
              />
            );
          })}
          {projectsCollaborated.map((project) => {
            return (
              <ProjectCard
                key={project.project_id}
                style={styles.card}
                project={project}
                handleViewProject={() =>
                  navigation.navigate(Navigators.PROJECT, {
                    projectId: project.project_id,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProjectsScreen;
