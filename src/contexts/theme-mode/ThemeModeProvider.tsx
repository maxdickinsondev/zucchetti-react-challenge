import { useCallback, useMemo, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";
import {
  ModeEnum,
  type Mode,
  type ThemeModeProviderProps,
} from "./types";
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
    return prefersDarkMode ? ModeEnum.DARK : ModeEnum.LIGHT;
  });

  const onToggle = useCallback(() => {
    setMode((prev) => {
      const next =
        prev === ModeEnum.LIGHT ? ModeEnum.DARK : ModeEnum.LIGHT;
      localStorage.setItem("theme-mode", next);
      return next;
    });
  }, []);

  const theme = useMemo(
    () => (mode === ModeEnum.LIGHT ? lightTheme : darkTheme),
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
