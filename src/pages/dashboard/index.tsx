import { UserList } from "./user-list";
import { Header } from "./header";
import { Box } from "@mui/material";
import { RemoveUser } from "./remove-user";
import { SelectedUserProvider } from "../../contexts/selected-user/SelectedUserProvider";

const style = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginInline: "auto",
  maxWidth: 1280,
  paddingInline: 16,
};

function WrapperDashboard() {
  return (
    <Box sx={style}>
      <Header />
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
