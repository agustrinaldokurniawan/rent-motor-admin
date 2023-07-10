import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";

const queryClient = new QueryClient();

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
