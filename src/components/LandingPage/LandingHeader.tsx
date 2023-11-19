import Logo from "@/src/utils/logo";
import { Button, Link, Stack } from "@mui/material";
import React from "react";

const LandingHeader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#F5F7FA",
        px: "24px",
        py: "12px",
      }}
    >
      <Logo height={18} />
      <Link
        href={"/auth/login"}
        key={"/auth/login"}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "secondary.main",
          }}
        >
          Login
        </Button>
      </Link>
    </Stack>
  );
};

export default LandingHeader;
