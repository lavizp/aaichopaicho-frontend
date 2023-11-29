import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAuth } from "@/src/firebase/authContext";
import { useRouter } from "next/router";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "clip",
        maxWidth: "100%",
      }}
    >
      <Sidebar toggleSidebar={() => setOpen((value) => !value)} isOpen={open} />
      <Box
        sx={{
          flex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header toggleSidebar={() => setOpen((value) => !value)} />
        <Box
          sx={{
            height: "100%",
            backgroundColor: "backgroundColor.light",
            overflow: "scroll",
            padding: "20px 40px",
            flex: 1,
          }}
        >
          <Box>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BaseLayout;
