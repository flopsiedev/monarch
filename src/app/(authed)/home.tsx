import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { router } from "expo-router";
import { agent } from "../../context";

export default function Home() {
    const [followers, setFollowers] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchFollowers = async () => {
        try {
          setIsLoading(true);
          const result = await agent.getProfile({ actor: agent.session?.did as string });
          
          const followersCount = result.data.followersCount;
          setFollowers(`Followers: ${followersCount}`);
          
        } catch (error) {
          console.error('Failed to fetch followers:', error
          );
          setFollowers('Error loading followers');
        } finally {
          setIsLoading(false);
        }
      };
      fetchFollowers();
    }, []);
  
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="mt-4 font-bold text-xl">
          {isLoading ? 'Loading...' : followers}
        </Text>
      </View>
    );
}