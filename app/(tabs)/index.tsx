import { Text, View, ScrollView } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";

export default function TabHomeScreen() {
  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: "auto", paddingTop: "auto" }}
    >
      <View className="mt-4 flex-auto items-center justify-between space-y-2">
        <Text className="text-base font-bold">Início</Text>
        <View className="w-full h-2/6 bg-gray-300"></View>
        <View className="w-full h-2/6 bg-gray-800"></View>
        <View className="w-full h-2/6 bg-gray-300"></View>
        <View className="w-full h-2/6 bg-gray-800"></View>
        <View className="w-full h-2/6 bg-gray-300"></View>
        <View className="w-full h-2/6 bg-gray-800"></View>
      </View>
    </ScrollView>
  );
}
