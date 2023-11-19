import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <>
      <Typography textAlign={"center"} fontSize={"36px"} fontWeight={"600"}>
        Features our users love
      </Typography>
      <Typography textAlign={"center"} fontSize={"16px"} fontWeight={"400"}>
        Our most prominent features
      </Typography>
      <Stack
        direction={"row"}
        alignItems={"center"}
        px={"80px"}
        py={"36px"}
        flexWrap={"wrap"}
        gap={"24px"}
        sx={{
          justifyContent: {
            sm: "center",
            md: "space-between",
          },
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "260px",
          }}
        >
          <Image src={"/Icon.png"} alt={"Icon"} width={50} height={50}></Image>
          <Typography fontSize={"28px"} fontWeight={"700"}>
            Easy to use
          </Typography>
          <Typography fontSize={"14px"} fontWeight={"200"} textAlign={"center"}>
            Our product is easy to use, with amazing UX and all
          </Typography>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            maxWidth: "260px",
          }}
        >
          <Image
            src={"/Icon-1.png"}
            alt={"Icon"}
            width={50}
            height={50}
          ></Image>
          <Typography fontSize={"28px"} fontWeight={"700"}>
            Detailed Analysis
          </Typography>
          <Typography fontSize={"14px"} fontWeight={"200"} textAlign={"center"}>
            Our product gives awesome analytics for ereryone
          </Typography>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "260px",
          }}
        >
          <Image
            src={"/Icon-2.png"}
            alt={"Icon"}
            width={50}
            height={50}
          ></Image>
          <Typography fontSize={"28px"} fontWeight={"700"} textAlign={"center"}>
            Secure
          </Typography>
          <Typography fontSize={"14px"} fontWeight={"200"} textAlign={"center"}>
            We are very secure.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          px: "80px",
          py: "48px",
          backgroundColor: "#F5F7FA",
        }}
      >
        <Typography
          fontWeight={"600"}
          sx={{
            fontSize: {
              sm: "64px",
              md: "64px",
            },
          }}
        >
          Your finance, safe and secure
        </Typography>
        <Typography fontSize={"16px"} fontWeight={"400"} m={"12px"}>
          With 256-bit encryption and multi-factor authentication, we protect
          your info as if it’s our own.
        </Typography>
        <Link
          href={"/auth/login"}
          key={"/auth/login"}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            endIcon={<FaArrowRightLong />}
            sx={{
              color: "white",
              backgroundColor: "#4CAF4F",
              px: "28px",
              py: "14px",
              mt: "12px",
            }}
          >
            Start Using
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default FeaturesSection;
