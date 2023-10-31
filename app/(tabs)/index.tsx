import { Text, View } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";

export default function TabHomeScreen() {
  return (
    <View className="justify-center items-center">
      <AntDesign name="home" />
      <Text className="text-base font-bold">Início</Text>
    </View>
  );
}
