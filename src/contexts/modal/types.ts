import type { ReactNode } from "react";

export interface ModalContextData {
  open: boolean;
  onOpen: (open: boolean) => void;
}

export interface ModalProviderProps {
  children: ReactNode;
}
