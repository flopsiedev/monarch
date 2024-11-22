import { Button, Text, View } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleGetProfile = async () => {
    router.push('/login');
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Button title="Login" onPress={handleGetProfile} />
    </View>
  );
}
