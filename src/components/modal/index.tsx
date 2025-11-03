import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Stack, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

function CustomModal({
  open,
  title,
  onclose,
  onConfirm,
  children,
}: {
  open: boolean;
  title: string;
  onclose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}) {
  return (
    <Modal
      open={open}
      onClose={onclose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography sx={{ mb: 2 }}>{title}</Typography>

        <Stack spacing={2}>{children}</Stack>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button variant="contained" onClick={onConfirm}>
            Salvar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export { CustomModal };
