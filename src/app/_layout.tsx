import { Slot } from "expo-router";
import { SessionProvider } from "../context";
import "@/global.css";


export default function Root() {
    return (
      <SessionProvider>
        <Slot />
      </SessionProvider>
    );
  }