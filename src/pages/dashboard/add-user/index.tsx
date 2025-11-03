import { TextField } from "@mui/material";
import { CustomModal } from "../../../components/modal";
import { useModal } from "../../../contexts/useModal";
import { useCallback, useState } from "react";
import { useAddUser } from "../../../hooks/useAddUser";

function AddUser() {
  const { open, onOpen } = useModal();
  const mutation = useAddUser();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const onChange = useCallback((key: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const onClose = useCallback(() => {
    onOpen(false);
  }, []);

  return (
    <CustomModal
      title="Adicionar usuário"
      open={open}
      onclose={onClose}
      onConfirm={() => mutation.mutate({ name: form.name, email: form.email, status: "active" })}
    >
      <TextField
        value={form.name}
        label="Nome"
        placeholder="Informe um nome"
        sx={{ width: "100%" }}
        onChange={(event) => onChange("name", event.target.value)}
      />
      <TextField
        value={form.email}
        label="E-mail"
        placeholder="Informe um e-mail"
        sx={{ width: "100%" }}
        onChange={(event) => onChange("email", event.target.value)}
      />
    </CustomModal>
  );
}

export { AddUser };
