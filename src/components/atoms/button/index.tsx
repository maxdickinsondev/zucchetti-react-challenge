import { Button, type ButtonProps } from "@mui/material";
import type { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

function CustomButton({ children, ...props }: CustomButtonProps) {
  return <Button {...props}>{children}</Button>;
}

export { CustomButton };
