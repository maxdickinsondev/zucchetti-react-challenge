import { UserList } from "./user-list";
import { Box } from "@mui/material";
import { RemoveUser } from "./remove-user";
import { SelectedUserProvider } from "../../../contexts/selected-user/SelectedUserProvider";
import { Toolbar } from "../../molecules/toolbar";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const style = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginInline: "auto",
  maxWidth: 1280,
  paddingInline: 16,
};

function WrapperDashboard() {
  const navigate = useNavigate();

  const navigateToCreateUser = useCallback(() => {
    navigate("/user/create");
  }, [navigate]);

  return (
    <Box sx={style}>
      <Toolbar
        title="Dashboard de Usuários"
        buttonText="Adicionar usuário"
        onClick={navigateToCreateUser}
      />
      <RemoveUser />
      <UserList />
    </Box>
  );
}

const Dashboard = () => (
  <SelectedUserProvider>
    <WrapperDashboard />
  </SelectedUserProvider>
);

export default Dashboard;
