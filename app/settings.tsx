import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";

export default function SettingsScreen() {
  return (
    <View className="justify-center items-center">
      <AntDesign name="setting" />
      <Text className="text-base font-bold">Ajustes</Text>
    </View>
  );
}
