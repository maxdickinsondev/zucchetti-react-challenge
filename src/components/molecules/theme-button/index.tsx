import { useThemeMode } from "../../../contexts/theme-mode/useTheme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { CustomIconButton } from "../../atoms/icon-button";

function ThemeButton() {
  const { mode, onToggle } = useThemeMode();

  return (
    <CustomIconButton onClick={onToggle} color="inherit">
      {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </CustomIconButton>
  );
}

export { ThemeButton };
