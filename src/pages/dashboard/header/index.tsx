import Add from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

function Header() {
  const navigate = useNavigate();

  console.log("re rendered Header component");

  return (
    <Box sx={style}>
      <Typography variant="h4">Dashboard de usuários</Typography>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="primary"
        onClick={() => navigate("/user/create")}
      >
        Adicionar usuário
      </Button>
    </Box>
  );
}

export { Header };
