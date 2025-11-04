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

interface Form {
  name: string;
  email: string;
}

interface FormProps {
  form: Form;
  title: string;
  errors: Partial<Record<keyof Form, string>>;
  onChange: (key: keyof Form, value: string) => void;
  goBack: () => void;
  onSave: () => void;
}

function CustomForm({
  form,
  title,
  errors,
  onChange,
  goBack,
  onSave,
}: FormProps) {
  return (
    <CustomBox sx={style}>
      <CustomStack spacing={2}>
        <CustomTypography variant="h4">{title}</CustomTypography>
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
          <CustomButton variant="outlined" onClick={goBack}>
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

export { CustomForm };
