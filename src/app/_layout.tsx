import LinearLayout from "@/components/Layout/LinearLayout";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <LinearLayout>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="(app)"
      >
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </LinearLayout>
  );
}
