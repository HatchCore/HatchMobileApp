/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { useRoute } from "@react-navigation/native";

import { getProject } from "src/api/client/project";
import { Project } from "src/api/types/APISchema";
import Stacks from "src/constants/Stacks";
import { UserContext } from "src/context/UserContext";

import ChatStack from "./ChatStack";

const Drawer = createDrawerNavigator();

const ProjectStack = () => {
  const route = useRoute();

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (route?.params?.projectId) {
      const fetchProject = async () => {
        const returnedProject = await getProject(route.params.projectId);
        setProject(returnedProject);

        console.log("Got project");
        console.log(returnedProject);
      };
      fetchProject();
    }
  }, [route.params]);
  return (
    <UserContext.Consumer>
      {({ user }) => {
        return (
          <Drawer.Navigator initialRouteName={Stacks.CHAT}>
            <Drawer.Screen name={Stacks.CHAT}>
              {() => <ChatStack project={project} user={user} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ProjectStack;
