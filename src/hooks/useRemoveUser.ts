import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/users";

function useRemoveUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id }: { id: string }) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return { mutation };
}

export { useRemoveUser };
