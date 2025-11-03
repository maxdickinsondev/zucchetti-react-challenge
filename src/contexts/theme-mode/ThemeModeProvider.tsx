import { useCallback, useMemo, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";
import type { Mode, ThemeModeProviderProps } from "./types";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const [mode, setMode] = useState<Mode>("light");

  const onToggle = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ThemeModeContext value={{ mode, onToggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext>
  );
}

export { ThemeModeProvider };
