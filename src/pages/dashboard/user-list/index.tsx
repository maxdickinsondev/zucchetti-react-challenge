import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useListUsers } from "../../../hooks/useListUsers";
import { useMemo } from "react";
import { RemoveUser } from "../remove-user";
import { useSelectedItem } from "../../../contexts/selected-item/useSelectedItem";

function UserList() {
  const { data } = useListUsers();
  const { onSelectUser } = useSelectedItem();

  console.log("re-rendered!");

  const columns: GridColDef<{
    id: string;
    name: string;
    email: string;
    status: string;
  }>[] = [
    { field: "name", headerName: "Nome", width: 150 },
    { field: "email", headerName: "E-mail", width: 400 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "Ações",
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <IconButton
            color="primary"
            onClick={() => console.log("Edit", params.row)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => onSelectUser(params.row)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

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
    <Box sx={{ mt: 4, width: "100%" }}>
      <RemoveUser />

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
