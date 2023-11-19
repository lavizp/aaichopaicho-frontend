import Logo from "@/src/utils/logo";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const LandingFooter = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#263238",
        px: "80px",
        py: "48px",
        gap: "24px",
      }}
    >
      <Logo height={"50"} />
      <Box
        sx={{
          color: "white",
        }}
      >
        <Typography textAlign={"center"}>Copyright © 2023 6Fold</Typography>
        <Typography textAlign={"center"}>All Rights Reserved</Typography>
      </Box>
    </Stack>
  );
};

export default LandingFooter;
