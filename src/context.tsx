import { useStorageState } from "@/src/hooks/useStorageState";
import { createContext, useContext, type PropsWithChildren } from "react";
import {  BskyAgent } from "@atproto/api";

export const agent = new BskyAgent({
    service: 'https://bsky.social',
})

const AuthContext = createContext<{
    signIn: (handle: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    session: string | null;
    isLoading: boolean;
}>({
    signIn: async () => {},
    signOut: async () => {},
    session: null,
    isLoading: false,
});

export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be used within a AuthProvider');
        }
    }
    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');
  
    return (
      <AuthContext.Provider
        value={{
          signIn: async (handle: string, password: string) => {
            try {
              const response = await agent.login({
                identifier: handle,
                password: password,
              });
              setSession(response.data.did);
            } catch (error) {
              console.error('Login failed:', error);
              throw error;
            }
          },
          signOut: async () => {
            setSession(null);
          },
          session,
          isLoading,
        }}>
        {children}
      </AuthContext.Provider>
    );
  }