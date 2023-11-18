import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"36px"}
      flexWrap={"wrap-reverse"}
      sx={{
        py: "80px",
        backgroundColor: "#F5F7FA",
      }}
    >
      <Box>
        <Typography
          fontWeight={"700"}
          sx={{
            fontSize: {
              xs: "36px",
              sm: "48px",
              md: "64px",
            },
          }}
        >
          Managing Money,
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "36px",
              sm: "48px",
              md: "64px",
            },
          }}
          fontWeight={"700"}
          color={"secondary"}
        >
          made simple
        </Typography>
        <Typography>The most practical financial tracking app</Typography>
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "secondary.main",
            mt: "12px",
          }}
        >
          Register
        </Button>
      </Box>
      <Image
        src={"/hero-banner.png"}
        alt={"hero-banner"}
        width={300}
        height={300}
      ></Image>
    </Stack>
  );
};

export default HeroSection;
