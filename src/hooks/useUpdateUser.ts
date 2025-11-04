import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/users";
import type { StatusEnum } from "../services/users/types";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({
      id,
      name,
      email,
      status,
    }: {
      id: string;
      name: string;
      email: string;
      status: StatusEnum;
    }) => updateUser(id, { name, email, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return mutation;
}

export { useUpdateUser };
