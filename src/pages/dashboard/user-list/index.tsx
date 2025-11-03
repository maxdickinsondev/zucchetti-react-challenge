import { Box } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useListUsers } from "../../../hooks/useListUsers";
import { useMemo } from "react";

const columns: GridColDef<{ id: number; name: string; email: string }>[] = [
  { field: "name", headerName: "Nome", width: 150 },
  { field: "email", headerName: "E-mail", width: 150 },
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
      })),
    [data],
  );

  return (
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
  );
}

export { UserList };
