import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { CustomBox } from "../../../atoms/box";
import { CustomTypography } from "../../../atoms/typography";
import { CustomButton } from "../../../atoms/button";

const style = {
  mt: 4,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

function Header() {
  const navigate = useNavigate();

  console.log("re rendered Header component");

  return (
    <CustomBox sx={style}>
      <CustomTypography variant="h4">
        Dashboard de usuários
      </CustomTypography>
      <CustomButton
        startIcon={<Add />}
        variant="contained"
        color="primary"
        onClick={() => navigate("/user/create")}
      >
        Adicionar usuário
      </CustomButton>
    </CustomBox>
  );
}

export { Header };
