import { TextField } from "@mui/material";
import { CustomModal } from "../../../components/modal";
import { useModal } from "../../../contexts/useModal";
import { useCallback } from "react";

function AddUser() {
  const { open, onOpen } = useModal();

  const onClose = useCallback(() => {
    onOpen(false);
  }, []);

  return (
    <CustomModal title="Adicionar usuário" open={open} onclose={onClose} onConfirm={() => {}}>
      <TextField placeholder="Informe um nome" sx={{ width: "100%" }} />
      <TextField placeholder="Informe um e-mail" sx={{ width: "100%" }} />
    </CustomModal>
  );
}

export { AddUser };
