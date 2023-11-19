import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const PhoneBanner = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"36px"}
        flexWrap={"wrap"}
        sx={{
          p: "80px",
        }}
      >
        <Image
          src={"/pana.png"}
          alt={"hero-banner"}
          width={300}
          height={300}
        ></Image>
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "50%",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <Typography
            fontWeight={"700"}
            sx={{
              fontSize: {
                xs: "18px",
                sm: "24px",
                md: "36px",
              },
            }}
          >
            All your Accounts in One Place
          </Typography>

          <Typography
            fontWeight={"200"}
            sx={{
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
            }}
          >
            See it all at a glance when you link your cash accounts, credit
            cards, investments, and bills
          </Typography>
          <Link
            href={"/auth/signup"}
            key={"/auth/signup"}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#4CAF4F",
                mt: "12px",
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"36px"}
        flexWrap={"wrap-reverse"}
        sx={{
          p: "80px",
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "50%",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <Typography
            fontWeight={"700"}
            sx={{
              fontSize: {
                xs: "18px",
                sm: "24px",
                md: "36px",
              },
            }}
          >
            Keep your cashflow crystal clear
          </Typography>

          <Typography
            fontWeight={"200"}
            sx={{
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
            }}
          >
            Effortlessly track your cashflow and gain insights that’ll help you
            see easy opportunities to save.
          </Typography>
          <Link
            href={"/auth/signup"}
            key={"/auth/signup"}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#4CAF4F",
                mt: "12px",
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
        <Image
          src={"/pana.png"}
          alt={"hero-banner"}
          width={300}
          height={300}
        ></Image>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"36px"}
        flexWrap={"wrap"}
        sx={{
          p: "80px",
        }}
      >
        <Image
          src={"/pana.png"}
          alt={"hero-banner"}
          width={300}
          height={300}
        ></Image>
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "50%",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <Typography
            fontWeight={"700"}
            sx={{
              fontSize: {
                xs: "18px",
                sm: "24px",
                md: "36px",
              },
            }}
          >
            Split Wise Feature
          </Typography>

          <Typography
            fontWeight={"200"}
            sx={{
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
            }}
          >
            Share your bills easily with your frends
          </Typography>
          <Link
            href={"/auth/signup"}
            key={"/auth/signup"}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#4CAF4F",
                mt: "12px",
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Stack>
    </>
  );
};

export default PhoneBanner;
