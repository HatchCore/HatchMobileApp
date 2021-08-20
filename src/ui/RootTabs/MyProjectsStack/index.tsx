import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { User } from "src/api/types/APISchema";
import Navigators from "src/constants/Navigators";
import Screens from "src/constants/Screens";

import MyProjectsScreen from "./MyProjectsScreen";
import ProjectDrawer from "./ProjectDrawer";

const Stack = createNativeStackNavigator();

interface MyProjectsStackProps {
  user: User | null;
}

const MyProjectsStack: React.FunctionComponent<MyProjectsStackProps> = (
  props: MyProjectsStackProps
) => {
  const { user } = props;
  return (
    <Stack.Navigator initialRouteName={Screens.MY_PROJECTS}>
      <Stack.Screen name={Screens.MY_PROJECTS}>
        {() => <MyProjectsScreen user={user} />}
      </Stack.Screen>
      <Stack.Screen name={Navigators.PROJECT} options={{ headerShown: false }}>
        {() => <ProjectDrawer />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MyProjectsStack;
