import React from "react";
import {Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import EVspots from "../screens/EVspots";
import Account from "../screens/Account";
import History from "../screens/History";


const Tab = createBottomTabNavigator();

const tabOptions = {

    showLabel: false,
    style : {

        height: "15%",
        backgroundColor: "#ffffff",
        }

}


const Tabs = () => {

    return (
    <Tab.Navigator

        // tabBarOptions = {tabOptions}
        screenOptions = {({route}) => ({
            tabBarIcon: ({focused}) => {
                const tintColor = focused ?"black" : "gray";

                switch(route.name) {

                    case "Home":

                    return (
                        <Image
                            source = {icons.dashboard}
                            resizeMode = "contain"
                            style = {{
                                tintColor: tintColor,
                                width: 25,
                                height: 25
                            }}
                        />
                    )

                        case "Search":

                        return (
                            <Image
                                source = {icons.search_icon}
                                resizeMode = "contain"
                                style = {{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )

                        case "Notification":

                        return (
                            <Image
                                source = {icons.notification}
                                resizeMode = "contain"
                                style = {{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )


                        case "Menu":

                        return (
                            <Image
                                source = {icons.menu_icon}
                                resizeMode = "contain"
                                style = {{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                }
            }
        })}


            >

                 <Tab.Screen
                    name = "Home"
                    component = {HomeScreen}
                    
                    />
                <Tab.Screen
                    name = "EV"
                    component = {EVspots}
                />  


                <Tab.Screen
                    name = "History"
                    component = {History}
                    
                /> 
                
                <Tab.Screen
                    name = "Account"
                    component = {Account}
                    
                /> 


    </Tab.Navigator>
    )
}


export default Tabs;