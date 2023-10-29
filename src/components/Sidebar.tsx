import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  makeStyles,
} from "@mui/material";
import React, { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  return (
    <Box
      width={"280px"}
      bgcolor={"backgroundColor.dark"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    ></Box>
  );
};

export default Sidebar;
