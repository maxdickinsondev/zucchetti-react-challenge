import { Box, Button, Dialog, Typography } from "@mui/material";
import { useSelectedItem } from "../../../contexts/selected-item/useSelectedItem";
import { useCallback } from "react";
import { useRemoveUser } from "../../../hooks/useRemoveUser";

function RemoveUser() {
  const { mutation } = useRemoveUser();
  const { user, onSelectUser } = useSelectedItem();

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
      <Box sx={{ p: 4 }}>
        <Typography>
          Tem certeza que deseja remover o usuário{" "}
          <strong>{user?.name}</strong>? Esta ação não poderá ser
          desfeita.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 4,
          }}
        >
          <Button onClick={onReset}>Cancelar</Button>
          <Button
            color="error"
            variant="contained"
            onClick={onDeleteUser}
          >
            Sim, remover
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export { RemoveUser };
