import { useCallback, useMemo, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";
import type { Mode, ThemeModeProviderProps } from "./types";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useMediaQuery } from "@mui/material";

function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const prefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: dark)",
  );
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("theme-mode") as Mode;
    if (savedMode) return savedMode;
    return prefersDarkMode ? "dark" : "light";
  });

  const onToggle = useCallback(() => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme-mode", next);
      return next;
    });
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
