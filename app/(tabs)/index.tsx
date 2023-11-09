import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { TouchableOpacity, useColorScheme } from "react-native";
import { ScrollView, Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import FakeApi from "../../constants/FakeApi";

export default function TabHomeScreen() {
  const iconColor = Colors[useColorScheme() ?? "light"].text;

  return (
    <ScrollView className="flex-1 p-2 space-y-2">
      {FakeApi.posts.map((post) => (
        <View key={post.id} className="p-4">
          <View className="flex-row items-center">
            <Image
              source={{ uri: post.userAvatarUrl }}
              className="w-12 h-12 rounded-full"
            />
            <Text className="font-bold ml-2">{post.username}</Text>
          </View>
          <Text className="mt-2">{post.text}</Text>
          <Image
            source={{ uri: post.imageUrl }}
            className="w-full h-40 mt-2 rounded-lg"
          />
          <TouchableOpacity>
            <View className="mt-2 flex-row items-center">
              <AntDesign name="heart" color={iconColor} size={15} />
              <Text className="ml-2">{post.likes} Curtidas</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
