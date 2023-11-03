import {
  Box,
  IconButton,
  List,
  Typography,
  Divider,
  styled,
  Avatar,
} from "@mui/material";
import React, { useRef, useState } from "react";

import MuiDrawer from "@mui/material/Drawer";

import SidebarChildren from "./SidebarChildren";
import Popup from "@/src/components/Popup";
import useWindowDimensions from "@/src/hooks/useWindowDimensions";
import useDetectOutsideClick from "@/src/hooks/useDetectOutsideClicks";
interface SidebarProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar, isOpen }) => {
  const toggleDrawer = () => {
    toggleSidebar();
  };

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: "260px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  const { tabletView } = useWindowDimensions();
  return (
    <>
      <Drawer
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
        variant="permanent"
        open={isOpen}
        PaperProps={{
          sx: {
            backgroundColor: "#181E09",
            height: "100vh",
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <SidebarChildren isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </Drawer>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <Popup
          position={"left"}
          isOpen={tabletView && isOpen}
          closePopup={() => toggleDrawer()}
        >
          <SidebarChildren isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </Popup>
      </Box>
    </>
  );
};

export default Sidebar;
