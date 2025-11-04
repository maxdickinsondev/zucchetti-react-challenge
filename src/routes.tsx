import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { ErrorBoundary } from "react-error-boundary";

const Dashboard = lazy(() => import("../src/pages/dashboard"));
const CreateUser = lazy(() => import("../src/pages/create-user"));
const UpdateUser = lazy(() => import("./pages/update-user"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary
                fallback={<p>Erro ao carregar o Dashboard.</p>}
              >
                <Dashboard />
              </ErrorBoundary>
            }
          />
          <Route
            path="/user/create"
            element={
              <ErrorBoundary
                fallback={<p>Erro ao carregar Criação de Usuário.</p>}
              >
                <CreateUser />
              </ErrorBoundary>
            }
          />
          <Route
            path="/user/edit/:id"
            element={
              <ErrorBoundary
                fallback={<p>Erro ao carregar Edição de Usuário.</p>}
              >
                <UpdateUser />
              </ErrorBoundary>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export { AppRoutes };
