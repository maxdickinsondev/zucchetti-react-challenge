import { AddUser } from "./add-user";
import { UserList } from "./user-list";
import { Header } from "./header";
import { Box } from "@mui/material";

function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        marginInline: "auto",
        maxWidth: 1280,
        paddingInline: 16,
      }}
    >
      <AddUser />
      <Header />
      <UserList />
    </Box>
  );
}

export default Dashboard;
