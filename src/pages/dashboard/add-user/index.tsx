import { TextField } from "@mui/material";
import { CustomModal } from "../../../components/modal";
import { useCallback } from "react";
import { useAddUser } from "../../../hooks/useAddUser";
import { useValidate } from "../../../hooks/useValidate";
import { addUserSchema } from "../../../schemas/add-user";
import { useForm } from "../../../hooks/useForm";
import { useModal } from "../../../contexts/modal/useModal";

function AddUser() {
  const { open, onOpen } = useModal();
  const mutation = useAddUser();
  const { errors, clear, validate } = useValidate<{
    name: string;
    email: string;
  }>(addUserSchema);
  const { form, clearForm, onChange } = useForm({
    name: "",
    email: "",
  });

  const onClose = useCallback(() => {
    onOpen(false);
    clear();
    clearForm();
  }, [clear, clearForm, onOpen]);

  const onSave = useCallback(async () => {
    try {
      const valid = await validate({
        name: form.name,
        email: form.email,
      });
      if (valid) {
        await mutation.mutateAsync({
          name: form.name,
          email: form.email,
          status: "active",
        });
        onClose();
      }
    } catch (err) {
      console.error(err);
    }
  }, [form, mutation, onClose, validate]);

  return (
    <CustomModal
      title="Adicionar usuário"
      isSaving={mutation.isPending}
      open={open}
      onclose={onClose}
      onConfirm={onSave}
    >
      <TextField
        value={form?.name || ""}
        error={!!errors?.name}
        helperText={errors?.name}
        label="Nome"
        placeholder="Informe um nome"
        sx={{
          width: "100%",
        }}
        onChange={(event) => onChange("name", event.target.value)}
      />
      <TextField
        value={form?.email || ""}
        error={!!errors?.email}
        helperText={errors.email}
        label="E-mail"
        placeholder="Informe um e-mail"
        sx={{
          width: "100%",
        }}
        onChange={(event) => onChange("email", event.target.value)}
      />
    </CustomModal>
  );
}

export { AddUser };
