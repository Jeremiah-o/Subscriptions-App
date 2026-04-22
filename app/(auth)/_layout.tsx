// import { useAuth } from '@clerk/expo'
// import { Redirect, Stack } from 'expo-router'
// import { useEffect } from 'react'
// import { useRouter } from 'expo-router'

// export default function AuthRoutesLayout() {
//   const { isSignedIn, isLoaded } = useAuth()
//   const router = useRouter()

//   useEffect(() => {
//     if (!isLoaded) return;

//     if (!isSignedIn) {
//       router.replace("/sign-in");
//     }
//   }, [isSignedIn, isLoaded])

  

//   return <Stack screenOptions={{headerShown:false}} />
// }

import { Stack } from "expo-router";

export default function AuthRoutesLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}