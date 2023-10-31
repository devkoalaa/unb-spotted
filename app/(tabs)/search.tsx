import { Text, View } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";

export default function TabSeacrhScreen() {
  return (
    <View className="justify-center items-center">
      <AntDesign name="search1" />
      <Text className="text-base font-bold">Pesquisar</Text>
    </View>
  );
}
