import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StateProvider } from "./context/StateContext";

import AuthStack from "./stacks/AuthStack";

export default () => {
  return(
    <StateProvider>
      <NavigationContainer>
          <AuthStack />
      </NavigationContainer>
    </StateProvider>
  )
}