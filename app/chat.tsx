import { MessageBubble } from "../components/MessageBubble";
import { ScrollView, Text, View } from "../components/Themed";
import FakeApi from "../constants/FakeApi";

export default function ChatScreen() {
  return (
    <ScrollView className="flex-1 p-1 space-y-2">
      <View className="justify-center space-y-5 items-center pb-3">
        {FakeApi.messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message.message}
            position={message.position}
          />
        ))}
      </View>
    </ScrollView>
  );
}
