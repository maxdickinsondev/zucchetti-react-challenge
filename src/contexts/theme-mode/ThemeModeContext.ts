import { createContext } from "react";
import type { ThemeModeContextData } from "./types";

export const ThemeModeContext = createContext(
  {} as ThemeModeContextData,
);
