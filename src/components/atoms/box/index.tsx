import { Box, type BoxProps } from "@mui/material";
import type { ReactNode } from "react";

export interface CustomBoxProps extends BoxProps {
  children: ReactNode;
}

function CustomBox({ children, ...props }: CustomBoxProps) {
  return <Box {...props}>{children}</Box>;
}

export { CustomBox };
