import { Box, Typography } from "@mui/material";
import { ThemeButton } from "../theme-button";

const style = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  maxWidth: 1280,
  marginInline: "auto",
  paddingInline: 16,
  paddingTop: 2,
};

function Header() {
  return (
    <Box sx={style}>
      <Typography variant="h6">@Zucchetti/React-Challenge</Typography>
      <ThemeButton />
    </Box>
  );
}

export { Header };
