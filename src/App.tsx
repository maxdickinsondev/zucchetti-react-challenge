import { ModalProvider } from "./contexts/modal/ModalProvider";
import { SelectedItemProvider } from "./contexts/selected-item/SelectedItemProvider";
import Dashboard from "./pages/dashboard";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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
        <SelectedItemProvider>
          <Dashboard />
        </SelectedItemProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
