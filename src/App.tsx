import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AppRoutes } from "./routes";

import { ThemeModeProvider } from "./contexts/theme-mode/ThemeModeProvider";

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
      <ThemeModeProvider>
        <AppRoutes />
      </ThemeModeProvider>
    </QueryClientProvider>
  );
}

export default App;
