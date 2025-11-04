import type { ReactNode } from "react";

export enum ModeEnum {
  LIGHT = "light",
  DARK = "dark",
}
export type Mode = ModeEnum.LIGHT | ModeEnum.DARK;

export interface ThemeModeContextData {
  mode: Mode;
  onToggle: () => void;
}

export interface ThemeModeProviderProps {
  children: ReactNode;
}
