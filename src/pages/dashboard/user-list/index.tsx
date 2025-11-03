import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useListUsers } from "../../../hooks/useListUsers";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { StatusEnum } from "../../../services/users/types";
import { useSelectedUser } from "../../../contexts/selected-user/useSelectedUser";

function UserList() {
  const { data } = useListUsers();
  const navigate = useNavigate();
  const { onSelectUser } = useSelectedUser();

  console.log("re-rendered!");

  const columns: GridColDef<{
    id: string;
    name: string;
    email: string;
    status: StatusEnum;
  }>[] = [
    { field: "name", headerName: "Nome", width: 150 },
    { field: "email", headerName: "E-mail", width: 400 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <span>
          {params.row.status === StatusEnum.ACTIVE
            ? "Ativo"
            : "Inativo"}
        </span>
      ),
    },
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
            onClick={() => {
              navigate(`/user/edit/${params.row.id}`);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => {
              onSelectUser(params.row);
            }}
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
