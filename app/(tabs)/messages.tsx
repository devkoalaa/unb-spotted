import { Image } from "expo-image";
import { ScrollView, Text, View } from "../../components/Themed";
import FakeApi from "../../constants/FakeApi";
import { Link } from "expo-router";

export default function TabMessagesScreen() {
  return (
    <ScrollView className="flex-1 space-y-2 p-2">
      {FakeApi.chatList.map((chat, index) => (
        <Link
          href="/chat"
          key={index}
          className="flex-row bg-slate-200 w-12/12 h-20 rounded"
        >
          <Image
            source={chat.userAvatarUrl}
            className="w-10 h-10 rounded-full"
          />
          <View className="items-start bg-transparent flex-1">
            <Text>{chat.name}</Text>
            <Text>{chat.preview}</Text>
          </View>
          <Text className="">{chat.timestamp}</Text>
        </Link>
      ))}
    </ScrollView>
  );
}
