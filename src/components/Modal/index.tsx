import { Box, Modal, SxProps } from "@mui/material";
import React from "react";
const style: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "36px",
  maxHeight: "580px",
  borderRadius: "15px",
  overflowY: "scroll",
};

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onclose: () => void;
}
const ModalComponent: React.FC<ModalProps> = ({ open, children, onclose }) => {
  return (
    <Modal
      open={open}
      onClose={onclose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }}>{children}</Box>
    </Modal>
  );
};

export default ModalComponent;
