import { ModalProvider } from "./contexts/ModalProvider";
import Dashboard from "./pages/dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Dashboard />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
