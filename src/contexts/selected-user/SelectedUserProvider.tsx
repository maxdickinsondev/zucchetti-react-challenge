import { useCallback, useState } from "react";
import type { SelectedUserProviderProps } from "./types";
import { SelectedUserContext } from "./SelectedUserContext";
import type { User } from "../../services/users/types";

function SelectedUserProvider({
  children,
}: SelectedUserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const onSelectUser = useCallback((user: User | null) => {
    setUser(user);
  }, []);

  return (
    <SelectedUserContext value={{ user, onSelectUser }}>
      {children}
    </SelectedUserContext>
  );
}

export { SelectedUserProvider };
