import { Box } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useListUsers } from "../../../hooks/useListUsers";
import { useMemo } from "react";

const columns: GridColDef<{ id: number; name: string; email: string; status: string }>[] = [
  { field: "name", headerName: "Nome", width: 150 },
  { field: "email", headerName: "E-mail", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

function UserList() {
  const { data } = useListUsers();

  console.log("re-rendered!");

  const rows = useMemo(
    () =>
      data?.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
      })),
    [data],
  );

  return (
    <Box sx={{ mt: 4 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export { UserList };
