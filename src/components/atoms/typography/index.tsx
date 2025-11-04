import { Typography, type TypographyProps } from "@mui/material";
import type { ReactNode } from "react";

export interface CustomTypographyProps extends TypographyProps {
  children: ReactNode;
}

function CustomTypography({
  children,
  ...props
}: CustomTypographyProps) {
  return <Typography {...props}>{children}</Typography>;
}

export { CustomTypography };
