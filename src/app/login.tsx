import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import { useSession } from '../context';

const USERNAME = Constants.expoConfig?.extra?.USERNAME;
const PASSWORD = Constants.expoConfig?.extra?.PASSWORD;

export default function SignIn() {
  const { signIn } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn(USERNAME, PASSWORD);
      router.replace('/home');
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={handleSignIn}>
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Text>
    </View>
  );
}