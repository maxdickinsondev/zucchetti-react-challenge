import { Dialog } from "@mui/material";
import { useCallback } from "react";
import { useRemoveUser } from "../../../../hooks/useRemoveUser";
import { useSelectedUser } from "../../../../contexts/selected-user/useSelectedUser";
import { CustomBox } from "../../../atoms/box";
import { CustomTypography } from "../../../atoms/typography";
import { CustomButton } from "../../../atoms/button";

function RemoveUser() {
  const { mutation } = useRemoveUser();
  const { user, onSelectUser } = useSelectedUser();

  console.log("re-rendered remover user component");

  const onReset = useCallback(() => {
    onSelectUser(null);
  }, [onSelectUser]);

  const onDeleteUser = useCallback(async () => {
    try {
      if (user) {
        await mutation.mutateAsync({ id: user.id });
        onReset();
      }
    } catch (err) {
      console.error(err);
    }
  }, [mutation, user, onReset]);

  return (
    <Dialog open={!!user}>
      <CustomBox sx={{ p: 4 }}>
        <CustomTypography>
          Tem certeza que deseja remover o usuário{" "}
          <strong>{user?.name}</strong>? Esta ação não poderá ser
          desfeita.
        </CustomTypography>

        <CustomBox
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 4,
          }}
        >
          <CustomButton onClick={onReset}>Cancelar</CustomButton>
          <CustomButton
            color="error"
            variant="contained"
            onClick={onDeleteUser}
          >
            Sim, remover
          </CustomButton>
        </CustomBox>
      </CustomBox>
    </Dialog>
  );
}

export { RemoveUser };
