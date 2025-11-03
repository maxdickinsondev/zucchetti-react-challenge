import { UserList } from "./user-list";
import { Header } from "./header";
import { Box } from "@mui/material";

const style = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  marginInline: "auto",
  maxWidth: 1280,
  paddingInline: 16,
};

function Dashboard() {
  return (
    <Box sx={style}>
      <Header />
      <UserList />
    </Box>
  );
}

export default Dashboard;
