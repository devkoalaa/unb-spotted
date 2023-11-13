import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView, Text, View } from "../../components/Themed";
import FakeApi from "../../constants/FakeApi";

export default function TabProfileScreen() {
  const iconColor = Colors[useColorScheme() ?? "light"].text;

  return (
    <ScrollView className="flex-1 p-2 space-y-2">
      <View className="justify-center space-y-5 items-center">
        <Image
          source={{ uri: FakeApi.users[0].userAvatarUrl }}
          className="w-40 h-40 mt-2 rounded-full"
        />
        <Text className="text-base font-bold">
          {FakeApi.users[0].name} {FakeApi.users[0].lastname}
        </Text>
        <View className="flex-row space-x-8">
          <View className="items-center">
            <Text className="font-bold">335</Text>
            <Text>Following</Text>
          </View>
          <View className="items-center border-x-white border-x-2 px-5">
            <Text className="font-bold">683</Text>
            <Text>Followers</Text>
          </View>
          <View className="items-center">
            <Text className="font-bold">1.034.967</Text>
            <Text>Likes</Text>
          </View>
        </View>
      </View>

      {FakeApi.posts.map((post) => (
        <View key={post.id} className="p-4">
          <View className="flex-row items-center">
            <Image
              source={{ uri: FakeApi.users[0].userAvatarUrl }}
              className="w-12 h-12 rounded-full"
            />
            <Text className="font-bold ml-2">{FakeApi.users[0].name}</Text>
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
