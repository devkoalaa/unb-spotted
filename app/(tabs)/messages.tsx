import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ScrollView, Text, View } from "../../components/Themed";
import FakeApi from "../../constants/FakeApi";

export default function TabMessagesScreen() {
  const router = useRouter();

  const handleChat = () => {
    router.push("/chat");
  };

  return (
    <ScrollView className="flex-1 space-y-2 mx-1 my-1">
      {FakeApi.chatList.map((chat, index) => (
        <TouchableOpacity key={index} onPress={handleChat}>
          <View className="flex-row bg-slate-200 w-12/12 h-24 rounded p-2">
            <View className="bg-transparent flex-row flex-1 items-center space-x-3">
              <Image
                source={chat.userAvatarUrl}
                className="w-14 h-14 rounded-full"
              />
              <View className="items-start bg-transparent flex-1">
                <Text className="font-bold">{chat.name}</Text>
                <Text>{chat.preview}</Text>
              </View>
            </View>
            <View className="items-end bg-transparent justify-center">
              <Text>{chat.timestamp}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
