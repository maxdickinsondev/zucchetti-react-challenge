import Add from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import { useCallback } from "react";
import { AddUser } from "../add-user";
import { useModal } from "../../../contexts/modal/useModal";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

function Header() {
  const { onOpen } = useModal();

  console.log("re rendered Header component");

  const onShow = useCallback(() => {
    onOpen(true);
  }, [onOpen]);

  return (
    <Box sx={style}>
      <AddUser />

      <Typography variant="h4">Dashboard de usuários</Typography>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="primary"
        onClick={onShow}
      >
        Adicionar usuário
      </Button>
    </Box>
  );
}

export { Header };
