import { useCallback } from "react";
import { useRemoveUser } from "../../../../hooks/useRemoveUser";
import { useSelectedUser } from "../../../../contexts/selected-user/useSelectedUser";
import { CustomDialog } from "../../../organisms/dialog";

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
    <CustomDialog
      user={user}
      description={
        <>
          Tem certeza que deseja remover o usuário{" "}
          <strong>{user?.name}</strong>? Esta ação não poderá ser
          desfeita.
        </>
      }
      buttonCancelText="Cancelar"
      buttonConfirmText="Sim, remover"
      onReset={onReset}
      onDelete={onDeleteUser}
    />
  );
}

export { RemoveUser };
