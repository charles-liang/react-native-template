/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RootStackRoutes, { RootStackParamList } from "./root-stack-routes";

const RootStack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  initialRouteName?: keyof RootStackParamList;
};

const RootStackNavigator = ({ initialRouteName }: Props) => {
  return (
    <RootStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerTitleAlign: "center"
      }}>
      <RootStack.Group>
        {RootStackRoutes.map(route => (
          <RootStack.Screen key={route.name} {...route} />
        ))}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
