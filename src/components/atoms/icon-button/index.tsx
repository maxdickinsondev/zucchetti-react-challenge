import { IconButton, type IconButtonProps } from "@mui/material";
import type { ReactNode } from "react";

export interface CustomIconButtonProps extends IconButtonProps {
  children: ReactNode;
}

function CustomIconButton({
  children,
  ...props
}: CustomIconButtonProps) {
  return <IconButton {...props}>{children}</IconButton>;
}

export { CustomIconButton };
