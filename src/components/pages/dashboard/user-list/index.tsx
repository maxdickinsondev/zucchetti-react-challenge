import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelectedUser } from "../../../../contexts/selected-user/useSelectedUser";
import { useListUsers } from "../../../../hooks/useListUsers";
import { StatusEnum } from "../../../../services/users/types";
import { CustomBox } from "../../../atoms/box";
import { CustomIconButton } from "../../../atoms/icon-button";

function UserList() {
  const { data } = useListUsers();
  const navigate = useNavigate();
  const { onSelectUser } = useSelectedUser();

  const columns: GridColDef<{
    id: string;
    name: string;
    email: string;
    status: StatusEnum;
  }>[] = [
    { field: "name", headerName: "Nome", width: 150 },
    {
      field: "email",
      headerName: "E-mail",
      width: 400,
      filterable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      filterable: false,
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
        <CustomBox
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <CustomIconButton
            color="primary"
            onClick={() => {
              navigate(`/user/edit/${params.row.id}`);
            }}
          >
            <EditIcon />
          </CustomIconButton>
          <CustomIconButton
            color="error"
            onClick={() => {
              onSelectUser(params.row);
            }}
          >
            <DeleteIcon />
          </CustomIconButton>
        </CustomBox>
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
    <CustomBox sx={{ mt: 4, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </CustomBox>
  );
}

export { UserList };
