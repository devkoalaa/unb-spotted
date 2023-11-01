import { TouchableOpacity } from "react-native";
import { Text, View, ScrollView } from "../../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";

const posts = [
  {
    id: 1,
    username: "adventureexplorer",
    userAvatarUrl: "https://picsum.photos/id/42/500/600",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 😊",
    imageUrl: "https://picsum.photos/id/37/500/600",
    likes: 15,
  },
  {
    id: 2,
    username: "creativeartistry",
    userAvatarUrl: "https://picsum.photos/id/19/500/600",
    text: "Suspendisse pellentesque ac lacus sit amet lorem ipsum. 🌟",
    imageUrl: "https://picsum.photos/id/62/500/600",
    likes: 91,
  },
  {
    id: 3,
    username: "coffeelover",
    userAvatarUrl: "https://picsum.photos/id/73/500/600",
    text: "Cras eleifend ipsum vitae lorem ullamcorper. 🌼",
    imageUrl: "https://picsum.photos/id/15/500/600",
    likes: 15,
  },
  {
    id: 4,
    username: "curioustraveler",
    userAvatarUrl: "https://picsum.photos/id/56/500/600",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 📚",
    imageUrl: "https://picsum.photos/id/29/500/600",
    likes: 743,
  },
  {
    id: 5,
    username: "deliciousgourmet",
    userAvatarUrl: "https://picsum.photos/id/88/500/600",
    text: "Vivamus auctor ipsum eget lorem consequat. 🌈",
    imageUrl: "https://picsum.photos/id/51/500/600",
    likes: 13,
  },
];

export default function TabHomeScreen() {
  return (
    <ScrollView className="flex-1 p-2 space-y-2">
      {posts.map((post) => (
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
          <View className="mt-2 flex-row items-center">
            <TouchableOpacity>
              <AntDesign name="heart" color="#fff" />
            </TouchableOpacity>
            <Text className="ml-2">{post.likes} Curtidas</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
