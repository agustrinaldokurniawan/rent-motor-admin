import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NativeBaseProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
