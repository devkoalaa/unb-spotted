import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import FakeApi from "../constants/FakeApi";
import { MainContext } from "../contexts/MainContext";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

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

const userLogged = FakeApi.users[0];

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <MainContext.Provider value={userLogged}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              statusBarColor: Colors[colorScheme ?? "light"].background,
              statusBarStyle: colorScheme == "light" ? "dark" : "light",
            }}
          />
          <Stack.Screen
            name="settings"
            options={{
              title: "Ajustes",
              statusBarColor: Colors[colorScheme ?? "light"].background,
              statusBarStyle: colorScheme == "light" ? "dark" : "light",
            }}
          />
          <Stack.Screen
            name="chat"
            options={{
              title: "Chat",
              statusBarColor: Colors[colorScheme ?? "light"].background,
              statusBarStyle: colorScheme == "light" ? "dark" : "light",
            }}
          />
        </Stack>
      </MainContext.Provider>
    </ThemeProvider>
  );
}
