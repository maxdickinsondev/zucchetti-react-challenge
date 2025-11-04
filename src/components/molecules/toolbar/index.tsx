import Add from "@mui/icons-material/Add";
import { CustomBox } from "../../atoms/box";
import { CustomTypography } from "../../atoms/typography";
import { CustomButton } from "../../atoms/button";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

export interface ToolbarProps {
  title: string;
  buttonText: string;
  onClick: () => void;
}

function Toolbar({ title, buttonText, onClick }: ToolbarProps) {
  return (
    <CustomBox sx={style}>
      <CustomTypography variant="h4">{title}</CustomTypography>
      <CustomButton
        startIcon={<Add />}
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        {buttonText}
      </CustomButton>
    </CustomBox>
  );
}

export { Toolbar };
