import { Text, View } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";

export default function TabProfileScreen() {
  return (
    <View className="justify-center items-center">
      <AntDesign name="user" />
      <Text className="text-base font-bold">Profile</Text>
    </View>
  );
}
