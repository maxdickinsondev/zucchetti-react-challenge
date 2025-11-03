import { useContext } from "react";
import { SelectedUserContext } from "./SelectedUserContext";

function useSelectedUser() {
  const context = useContext(SelectedUserContext);

  if (!context) {
    throw new Error(
      "useSelectedUser must be used within a SelectedUserProvider",
    );
  }

  return context;
}

export { useSelectedUser };
