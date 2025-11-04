import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useCreateUser } from "../../../hooks/useCreateUser";
import { useValidate } from "../../../hooks/useValidate";
import { userSchema } from "../../../schemas/add-user";
import { useForm } from "../../../hooks/useForm";
import { StatusEnum } from "../../../services/users/types";
import { CustomButton } from "../../atoms/button";
import { CustomBox } from "../../atoms/box";
import { CustomTextField } from "../../atoms/textfield";
import { CustomStack } from "../../atoms/stack";
import { CustomTypography } from "../../atoms/typography";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginInline: "auto",
  maxWidth: 1280,
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
    <CustomBox sx={style}>
      <CustomStack spacing={2}>
        <CustomTypography variant="h4">
          Adicionar usuário
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

export default CreateUser;
