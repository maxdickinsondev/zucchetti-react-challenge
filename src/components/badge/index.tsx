import { Box } from "@mui/material";
import type { ReactNode } from "react";

function Badge({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "#a2cf6e",
        width: "max-content",
        borderRadius: 2,
      }}
    >
      {children}
    </Box>
  );
}

export { Badge };
