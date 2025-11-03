import { useContext } from "react";
import { SelectedItemContext } from "./SelectedItemContext";

function useSelectedItem() {
  const context = useContext(SelectedItemContext);

  if (!context) {
    throw new Error(
      "useSelectedItem must be used within a SelectedItemProvider",
    );
  }

  return context;
}

export { useSelectedItem };
