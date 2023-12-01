import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { BiExit } from "react-icons/bi";
import { useAuth } from "@/src/firebase/authContext";
import { useRouter } from "next/router";
const ProfilePopover = () => {
  const { signOut } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.push("/auth/login");
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F7FAEF",
        borderRadius: "36px",
        padding: "16px",
        width: "300px",
      }}
    >
      <Stack alignItems={"center"} flexDirection={"row"} gap={"12px"}>
        <Avatar
          sx={{
            height: "42px",
            width: "42px",
          }}
        />
        <Box>
          <Typography fontSize={"18px"} fontWeight={"500"}>
            Harry
          </Typography>
          <Typography fontSize={"16px"} fontWeight={"500"} color={"#999"}>
            asd
          </Typography>
        </Box>
      </Stack>
      <Divider
        sx={{
          marginY: "12px",
        }}
      />
      <IconButton
        sx={{
          padding: "14px",
          cursor: "pointer",
          gap: "12px",
          color: "black",
        }}
      >
        <LuSettings2 />
        <Typography fontWeight={"500"}>Profile Settings</Typography>
      </IconButton>
      <IconButton
        sx={{
          padding: "14px",
          cursor: "pointer",
          gap: "12px",
          color: "black",
        }}
        onClick={handleLogout}
      >
        <BiExit />
        <Typography fontWeight={"500"}>Sign Out</Typography>
      </IconButton>
    </Box>
  );
};

export default ProfilePopover;
