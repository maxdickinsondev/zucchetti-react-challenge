import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useValidate } from "../../hooks/useValidate";
import { userSchema } from "../../schemas/add-user";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { findUserById } from "../../services/users";
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

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mutation = useUpdateUser();
  const { errors, validate } = useValidate<{
    name: string;
    email: string;
  }>(userSchema);
  const { form, setForm, onChange } = useForm({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        if (id) {
          const response = await findUserById(id);
          setForm({
            name: response.name,
            email: response.email,
          });
          console.log("response", response);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchUser();
  }, [id, setForm]);

  const onSave = useCallback(async () => {
    try {
      const valid = await validate({
        name: form.name,
        email: form.email,
      });
      if (id && valid) {
        await mutation.mutateAsync({
          id: id,
          name: form.name,
          email: form.email,
          status: StatusEnum.ACTIVE,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [form, id, mutation, validate]);

  console.log("aqui");

  return (
    <Box sx={style}>
      <Stack spacing={2}>
        <Typography variant="h4">Editar usuário</Typography>
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

export default UpdateUser;
