import { Text, View } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";

export default function TabMessagesScreen() {
  return (
    <View className="justify-center items-center">
      <AntDesign name="message1" />
      <Text className="text-base font-bold">Mensagens</Text>
    </View>
  );
}
