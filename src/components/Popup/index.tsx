import React from "react";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";
interface PopupProps {
  children: React.ReactNode;
  position: "left" | "center" | "right";
  isOpen: boolean;
  closePopup: () => void;
}

const getPopupStyles = (position: "left" | "center" | "right") => {
  let styles: React.CSSProperties = {
    backgroundColor: "#fff",
    minWidth: "fit-content",
  };

  if (position === "left") {
    styles = {
      ...styles,
      left: 0,
    };
  } else if (position === "center") {
    styles = {
      ...styles,
    };
  } else if (position === "right") {
    styles = {
      ...styles,
      right: 0,
    };
  }

  return styles;
};

const Popup: React.FC<PopupProps> = ({
  children,
  position,
  isOpen,
  closePopup,
}) => {
  const handleClose = () => {
    closePopup();
  };
  return (
    <Popover
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{
        vertical: position == "center" ? "center" : "top",
        horizontal: position,
      }}
      transformOrigin={{
        vertical: position == "center" ? "center" : "top",
        horizontal: position,
      }}
    >
      <Paper style={getPopupStyles(position)}>{children}</Paper>
    </Popover>
  );
};

export default Popup;
