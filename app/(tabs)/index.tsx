import "@/global.css"
import { Link } from "expo-router";
import { Text} from "react-native";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind"

const SafeAreaView = styled(RNSafeAreaView);
 
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="font-sans-extrabold text-7xl text-primary">
        Home
      </Text>
      <Text className="font-bold text-7xl text-primary">
        Home
      </Text>
      <Link href="/(auth)/sign-in" className="p-4 mt-4 text-white rounded font-sans-bold bg-primary">Sign in</Link>
      <Link href="/(auth)/sign-up" className="p-4 mt-4 text-white rounded font-sans-bold bg-primary">Sign up</Link>
    </SafeAreaView>
  );
}