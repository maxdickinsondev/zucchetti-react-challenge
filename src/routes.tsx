import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Box } from "@mui/material";

const Dashboard = lazy(() => import("../src/pages/dashboard"));
const CreateUser = lazy(() => import("../src/pages/create-user"));
const UpdateUser = lazy(() => import("./pages/update-user"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading...
          </Box>
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/edit/:id" element={<UpdateUser />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export { AppRoutes };
