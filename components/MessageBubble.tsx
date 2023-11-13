import { View, Text } from "../components/Themed";

export function MessageBubble({
  position,
  message,
}: {
  position: string;
  message: string;
}) {
  const selfAlign = position == "remet" ? "self-end" : "self-start";
  const tail = position == "remet" ? "right-2" : "left-2";
  const color = position == "remet" ? "bg-gray-300" : "bg-slate-400";

  return (
    <View
      className={`max-w-md mx-4 my-2 p-4 ${color} text-black rounded-lg relative ${selfAlign}`}
    >
      <Text>{message}</Text>
      <View
        className={`absolute w-4 h-4 ${color} transform rotate-45 -bottom-1 ${tail}`}
      />
    </View>
  );
}
