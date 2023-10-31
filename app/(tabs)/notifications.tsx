import { Text, View } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";

export default function TabNotificationScreen() {
  return (
    <View className="justify-center items-center">
      <AntDesign name="bells" />
      <Text className="text-base font-bold">Notificações</Text>
    </View>
  );
}
