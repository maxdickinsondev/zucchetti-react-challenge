import { useThemeMode } from "../../contexts/theme-mode/useTheme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, IconButton } from "@mui/material";

function ThemeButton() {
  const { mode, onToggle } = useThemeMode();

  return (
    <Box>
      <IconButton onClick={onToggle} color="inherit">
        {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Box>
  );
}

export { ThemeButton };
