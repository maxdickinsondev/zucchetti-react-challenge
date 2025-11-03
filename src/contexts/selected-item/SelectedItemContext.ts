import { createContext } from "react";
import type { SelectedItemContextData } from "./types";

export const SelectedItemContext = createContext(
  {} as SelectedItemContextData,
);
