import { ThemeButton } from "../theme-button";
import { CustomBox } from "../../atoms/box";
import { CustomTypography } from "../../atoms/typography";

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

function Header({ title }: { title: string }) {
  return (
    <CustomBox sx={style}>
      <CustomTypography variant="h6">{title}</CustomTypography>
      <ThemeButton />
    </CustomBox>
  );
}

export { Header };
