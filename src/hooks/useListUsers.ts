import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/users";

function useListUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}

export { useListUsers };
