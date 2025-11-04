import { Dialog } from "@mui/material";
import { CustomBox } from "../../atoms/box";
import { CustomTypography } from "../../atoms/typography";
import { CustomButton } from "../../atoms/button";
import type { User } from "../../../services/users/types";
import type { ReactNode } from "react";

export interface CustomDialogProps {
  user: User | null;
  description: ReactNode;
  buttonCancelText: string;
  buttonConfirmText: string;
  onReset: () => void;
  onDelete: () => void;
}

function CustomDialog({
  user,
  description,
  buttonCancelText,
  buttonConfirmText,
  onReset,
  onDelete,
}: CustomDialogProps) {
  return (
    <Dialog open={!!user}>
      <CustomBox sx={{ p: 4 }}>
        <CustomTypography>{description}</CustomTypography>

        <CustomBox
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 4,
          }}
        >
          <CustomButton onClick={onReset}>
            {buttonCancelText}
          </CustomButton>
          <CustomButton
            color="error"
            variant="contained"
            onClick={onDelete}
          >
            {buttonConfirmText}
          </CustomButton>
        </CustomBox>
      </CustomBox>
    </Dialog>
  );
}

export { CustomDialog };
