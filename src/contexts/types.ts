import type { ReactNode } from "react";
import type { User } from "../services/users/types";

export interface SelectedUserContextData {
  user: User | null;
  onSelectUser: (user: User | null) => void;
}

export interface SelectedUserProviderProps {
  children: ReactNode;
}
