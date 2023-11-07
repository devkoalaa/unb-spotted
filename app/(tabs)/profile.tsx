import { Text, View } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import FakeApi from "../../constants/FakeApi";
import { Image } from "expo-image";

export default function TabProfileScreen() {
  return (
    <View className="justify-center items-center">
      <View className="flex-row">
        <Image
          source={{ uri: FakeApi.users[0].avatarUrl }}
          className="w-40 h-40 mt-2 rounded-full"
        />
        <Text className="text-base">{FakeApi.users[0].name}</Text>
      </View>
    </View>
  );
}
