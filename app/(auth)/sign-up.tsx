import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind"

const SafeAreaView = styled(RNSafeAreaView);

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        SignUp
      </Text>
      <Link href="/(auth)/sign-in">Sign in</Link>
    </SafeAreaView>
  )
}

export default SignUp