import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../src/pages/dashboard"));
const CreateUser = lazy(() => import("../src/pages/create-user"));
const UpdateUser = lazy(() => import("./pages/update-user"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
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
