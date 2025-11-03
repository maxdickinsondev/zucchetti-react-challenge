import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/users";

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
      status: string;
    }) => updateUser(id, { name, email, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return mutation;
}

export { useUpdateUser };
