import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator()

export default ()=>{
    return(
        <BottomTab.Navigator 
            initialRouteName="Profile"
            screenOptions={{ headerShown:false }}
        >
            <BottomTab.Screen name="Profile" component={Profile} />
            <BottomTab.Screen name="Preload" component={Preload} />
            <BottomTab.Screen name="Home" component={Home} />
        </BottomTab.Navigator>
    )
}