import { Box, Button } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useListUsers } from "../hooks/useListUsers";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import type { GridColDef } from "@mui/x-data-grid";

function Dashboard() {
  const { data } = useListUsers();

  const columns: GridColDef<{ id: number; name: string; email: string }>[] = [
    { field: "name", headerName: "Nome", width: 150 },
    { field: "email", headerName: "E-mail", width: 150 },
  ];

  const rows = useMemo(
    () =>
      data?.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      })),
    [data],
  );

  return (
    <div className="flex min-h-screen mx-auto max-w-7xl w-full px-4 sm:px-6 xl:px-20">
      <div className="flex flex-col flex-1 py-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard de usuários</h1>
          <Button startIcon={<Add />} variant="contained" color="primary">
            Adicionar usuário
          </Button>
        </div>

        <Box>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;
