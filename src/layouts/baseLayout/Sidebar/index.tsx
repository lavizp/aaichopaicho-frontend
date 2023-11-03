import {
  Box,
  IconButton,
  List,
  Typography,
  Divider,
  styled,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { BiHelpCircle, BiWallet } from "react-icons/bi";
import { BsBarChart, BsPercent } from "react-icons/bs";

import { LuLayoutDashboard } from "react-icons/lu";
import { PiPiggyBank } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import MuiDrawer from "@mui/material/Drawer";

import Logo from "@/src/utils/logo";
const sidebarItems = [
  { text: "Dashboard", icon: <LuLayoutDashboard />, id: "dashboard" },
  { text: "Analitycs", icon: <BsBarChart />, id: "analitycs" },
  { text: "Transactions", icon: <BiWallet />, id: "transactions" },
  { text: "Split Smart", icon: <BsPercent />, id: "split-smart" },
  { text: "EMI Calculator", icon: <PiPiggyBank />, id: "emi-calculator" },
  { text: "Securities", icon: <MdOutlineSecurity />, id: "securities" },
];
const secondarySidebarItems = [
  { text: "Help", icon: <BiHelpCircle />, id: "help" },
  { text: "Settings", icon: <FiSettings />, id: "settings" },
];
const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen((value) => !value);
  };

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
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
  return (
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
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#181E09",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "12px",
            paddingY: "12px",
          }}
        >
          {open && <Logo height={18} />}
          <IconButton onClick={() => toggleDrawer()}>
            {open ? (
              <AiOutlineLeft color="white" size={12} />
            ) : (
              <AiOutlineRight color="white" size={12} />
            )}
          </IconButton>
        </Box>
        <Divider sx={{ my: 1, backgroundColor: "gray" }} />
        <List component="nav">
          <Box
            sx={{
              paddingX: "24px",

              height: "350px",
              overflowY: "scroll",
            }}
          >
            {sidebarItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  paddingY: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  cursor: "pointer",
                  color: item.id == activeItem ? "white" : "grey",
                  fontSize: "16px",
                }}
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon}
                {open && item.text}
              </Box>
            ))}
            <Divider sx={{ my: 1, backgroundColor: "gray" }} />
            {secondarySidebarItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  paddingY: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  cursor: "pointer",
                  color: item.id == activeItem ? "white" : "grey",
                  fontSize: "16px",
                }}
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon}
                {open && item.text}
              </Box>
            ))}
          </Box>
        </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "24px",
          gap: "8px",
        }}
      >
        <Avatar />
        <Box>
          <Typography color={"white"} fontSize={"16px"}>
            Laviz Pandey
          </Typography>
          <Typography color={"gray"} fontSize={"12px"}>
            pandeylaviz@gmail.com
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
