import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Sign in</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Sign up</Link>
      <Link href={{pathname:"/subscriptions/[id]", params:{id: "claude"}}} className="mt-4 rounded bg-primary text-white p-4">Claudes</Link>
      <Link href={{pathname:"/subscriptions/[id]", params:{id: "spotify"}}} className="mt-4 rounded bg-primary text-white p-4">Go to Subscription Details spotify</Link>
    </View>
  );
}