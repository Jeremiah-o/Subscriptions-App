import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind"

const SafeAreaView = styled(RNSafeAreaView);
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/(auth)/sign-in" className="p-4 mt-4 text-white rounded bg-primary">Sign in</Link>
      <Link href="/(auth)/sign-up" className="p-4 mt-4 text-white rounded bg-primary">Sign up</Link>
      <Link href={{pathname:"/subscriptions/[id]", params:{id: "claude"}}}>Claudes</Link>
      <Link href={{pathname:"/subscriptions/[id]", params:{id: "spotify"}}}>Go to Subscription Details spotify</Link>
    </SafeAreaView>
  );
}