import Logo from "@/src/utils/logo";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiHelpCircle, BiWallet } from "react-icons/bi";
import { BsBarChart, BsPercent } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { PiPiggyBank } from "react-icons/pi";
import useWindowDimensions from "@/src/hooks/useWindowDimensions";
const sidebarItems = [
  { text: "Dashboard", icon: <LuLayoutDashboard />, id: "dashboard" },
  { text: "Analitycs", icon: <BsBarChart />, id: "analytics" },
  { text: "Transactions", icon: <BiWallet />, id: "transactions" },
  { text: "Split Smart", icon: <BsPercent />, id: "split-smart" },
  { text: "EMI Calculator", icon: <PiPiggyBank />, id: "emi-calculator" },
  { text: "Securities", icon: <MdOutlineSecurity />, id: "securities" },
];
const secondarySidebarItems = [
  { text: "Help", icon: <BiHelpCircle />, id: "help" },
  { text: "Settings", icon: <FiSettings />, id: "settings" },
];
interface SidebarChildrenProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}
const SidebarChildren: React.FC<SidebarChildrenProps> = ({
  isOpen,
  toggleDrawer,
}) => {
  const [activeItem, setActiveItem] = useState("analytics");
  useEffect(() => {
    const parts = window.location.pathname.split("/");
    setActiveItem(parts[parts.length - 1]);
  }, []);
  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };
  const { tabletView } = useWindowDimensions();
  return (
    <>
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
          {isOpen && <Logo height={18} />}
          <IconButton onClick={() => toggleDrawer()}>
            {isOpen ? (
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
              <Link
                href={item.id}
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    paddingY: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "8px",
                    cursor: "pointer",
                    color: tabletView
                      ? "black"
                      : item.id == activeItem
                      ? "white"
                      : "grey",
                    fontSize: "16px",
                    fontWeight: tabletView
                      ? item.id == activeItem
                        ? 550
                        : 500
                      : 500,
                  }}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.icon}
                  {isOpen && item.text}
                </Box>
              </Link>
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
                {isOpen && item.text}
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
    </>
  );
};

export default SidebarChildren;
