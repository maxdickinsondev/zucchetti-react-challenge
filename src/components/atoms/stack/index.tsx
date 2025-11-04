import { Stack, type StackProps } from "@mui/material";
import type { ReactNode } from "react";

export interface CustomStackProps extends StackProps {
  children: ReactNode;
}

function CustomStack({ children, ...props }: CustomStackProps) {
  return <Stack {...props}>{children}</Stack>;
}

export { CustomStack };
