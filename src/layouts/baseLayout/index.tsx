import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          sx={{
            backgroundColor: "backgroundColor.light",
            overflowY: "scroll",
            padding: "20px 40px",
            flex: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default BaseLayout;
