import { TextField, type TextFieldProps } from "@mui/material";

export type CustomTextFieldProps = TextFieldProps;

function CustomTextField({ ...props }: CustomTextFieldProps) {
  return <TextField {...props} />;
}

export { CustomTextField };
