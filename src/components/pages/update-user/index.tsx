import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useUpdateUser } from "../../../hooks/useUpdateUser";
import { useValidate } from "../../../hooks/useValidate";
import { userSchema } from "../../../schemas/add-user";
import { useForm } from "../../../hooks/useForm";
import { findUserById } from "../../../services/users";
import { StatusEnum } from "../../../services/users/types";
import { CustomBox } from "../../atoms/box";
import { CustomStack } from "../../atoms/stack";
import { CustomTypography } from "../../atoms/typography";
import { CustomTextField } from "../../atoms/textfield";
import { CustomButton } from "../../atoms/button";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginInline: "auto",
  maxWidth: 1280,
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
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  }, [form, id, mutation, navigate, validate]);

  console.log("aqui");

  return (
    <CustomBox sx={style}>
      <CustomStack spacing={2}>
        <CustomTypography variant="h4">
          Editar usuário
        </CustomTypography>
        <CustomTextField
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
        <CustomTextField
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
        <CustomBox
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 3,
            gap: 2,
          }}
        >
          <CustomButton
            variant="outlined"
            onClick={() => navigate("/")}
          >
            Voltar
          </CustomButton>
          <CustomButton variant="contained" onClick={onSave}>
            Salvar
          </CustomButton>
        </CustomBox>
      </CustomStack>
    </CustomBox>
  );
}

export default UpdateUser;
