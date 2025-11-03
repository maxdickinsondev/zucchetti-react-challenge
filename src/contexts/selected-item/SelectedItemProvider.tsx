import { useCallback, useState } from "react";
import { SelectedItemContext } from "./SelectedItemContext";
import type { SelectedItemProviderProps } from "./types";
import type { User } from "../../services/users/types";

function SelectedItemProvider({
  children,
}: SelectedItemProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const onSelectUser = useCallback((user: User | null) => {
    setUser(user);
  }, []);

  return (
    <SelectedItemContext value={{ user, onSelectUser }}>
      {children}
    </SelectedItemContext>
  );
}

export { SelectedItemProvider };
