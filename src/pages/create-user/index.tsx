import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useValidate } from "../../hooks/useValidate";
import { userSchema } from "../../schemas/add-user";
import { useForm } from "../../hooks/useForm";
import { StatusEnum } from "../../services/users/types";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginInline: "auto",
  maxWidth: 964,
  paddingInline: 16,
};

function CreateUser() {
  const navigate = useNavigate();
  const mutation = useCreateUser();
  const { errors, validate } = useValidate<{
    name: string;
    email: string;
  }>(userSchema);

  const { form, onChange } = useForm({
    name: "",
    email: "",
  });

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
          status: StatusEnum.ACTIVE,
        });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }, [form, mutation, validate, navigate]);

  return (
    <Box sx={style}>
      <Stack spacing={2}>
        <Typography variant="h4">Adicionar usuário</Typography>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 3,
            gap: 2,
          }}
        >
          <Button variant="outlined" onClick={() => navigate("/")}>
            Voltar
          </Button>
          <Button variant="contained" onClick={onSave}>
            Salvar
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default CreateUser;
