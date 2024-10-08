import { Stack } from "expo-router";

const Tabs = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="chat" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="rides" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Tabs;
