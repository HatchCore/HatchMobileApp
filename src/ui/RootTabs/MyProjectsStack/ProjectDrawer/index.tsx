/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { useRoute } from "@react-navigation/native";

import { getProject } from "src/api/client/project";
import { Project } from "src/api/types/APISchema";
import KeyboardAvoidingComponent from "src/components/KeyboardAvoidingComponent";
import Navigators from "src/constants/Navigators";
import { UserContext } from "src/context/UserContext";

import ChatStack from "./ChatStack";

const Drawer = createDrawerNavigator();

const ProjectDrawer = () => {
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
          <Drawer.Navigator initialRouteName={Navigators.CHAT}>
            <Drawer.Screen name={Navigators.CHAT}>
              {() => <ChatStack project={project} user={user} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ProjectDrawer;
