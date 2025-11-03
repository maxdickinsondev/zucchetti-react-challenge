import type { ReactNode } from "react";
import type { User } from "../../services/users/types";

export interface SelectedItemContextData {
  user: User | null;
  onSelectUser: (user: User | null) => void;
}

export interface SelectedItemProviderProps {
  children: ReactNode;
}
