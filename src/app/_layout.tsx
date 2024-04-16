import Header from "@/cmp/header";
import { useCustomTheme } from "@/cmp/hook/useCustomTheme";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { AppRegistry,  Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

import Entypo from '@expo/vector-icons/Entypo';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    

    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        ...FontAwesome.font,
    });

    

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const t = useCustomTheme();
    
    return (
        <ThemeProvider theme={t}>
            <SafeAreaView style={{ flex: 1 }}>
                <Header/>
                <Stack initialRouteName="/" screenOptions={{ animation: "fade", orientation: "portrait_up", navigationBarColor: "white" }}>
                    <Stack.Screen name="index"  options={{  
                        statusBarColor: t.tray.backgroundColor, statusBarStyle: t.tray.contentColor, headerShown: false
                        }} />
                    <Stack.Screen name="matches" options={{  statusBarColor: t.tray.backgroundColor, statusBarStyle: t.tray.contentColor, headerShown: false}} />
                </Stack>
            </SafeAreaView>
        </ThemeProvider>
    );
}

//<StatusBar/>