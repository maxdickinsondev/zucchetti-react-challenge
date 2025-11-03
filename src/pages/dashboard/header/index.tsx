import Add from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import { useModal } from "../../../contexts/useModal";
import { useCallback } from "react";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

function Header() {
  const { onOpen } = useModal();

  const onShow = useCallback(() => {
    onOpen(true);
  }, []);

  return (
    <Box sx={style}>
      <Typography variant="h4">Dashboard de usuários</Typography>
      <Button startIcon={<Add />} variant="contained" color="primary" onClick={onShow}>
        Adicionar usuário
      </Button>
    </Box>
  );
}

export { Header };
