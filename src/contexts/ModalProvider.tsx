import { useCallback, useState } from "react";
import { ModalContext } from "./ModalContext";
import type { ModalProviderProps } from "./types";

function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return <ModalContext value={{ open, onOpen }}>{children}</ModalContext>;
}

export { ModalProvider };
