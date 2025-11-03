import { createContext } from "react";
import type { SelectedUserContextData } from "./types";

export const SelectedUserContext = createContext(
  {} as SelectedUserContextData,
);
