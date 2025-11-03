import type { ReactNode } from "react";

export type Mode = "light" | "dark";

export interface ThemeModeContextData {
  mode: Mode;
  onToggle: () => void;
}

export interface ThemeModeProviderProps {
  children: ReactNode;
}
