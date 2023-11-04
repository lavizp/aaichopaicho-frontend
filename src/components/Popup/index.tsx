import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";
import useDetectOutsideClick from "@/src/hooks/useDetectOutsideClicks";
import useWindowDimensions from "@/src/hooks/useWindowDimensions";
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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { tabletView } = useWindowDimensions();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const popupRef = useRef<HTMLDivElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useDetectOutsideClick({
    ref: popupRef,
    callback: () => {
      closePopup();
    },
  });
  return (
    <div ref={popupRef}>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
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
    </div>
  );
};

export default Popup;
