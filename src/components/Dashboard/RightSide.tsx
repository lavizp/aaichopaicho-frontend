import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DefaultCard from "../DefaultCard";
import { BiLogoVisa } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import GoalsCard from "./GoalsCard";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
const RightSide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: {
          xs: "100%",
          sm: "100%",
          md: "378px",
        },
      }}
    >
      <DefaultCard
        customSx={{
          backgroundColor: "#41C863",
          color: "white",
          padding: "24px",
        }}
      >
        <Typography fontSize={"24px"} fontWeight={"700"}>
          My Card
        </Typography>
        <Typography>Card Balance</Typography>
        <Typography fontSize={"24px"} fontWeight={"700"}>
          Rs. 15,595.015
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "200px",
            background:
              "linear-gradient(177deg, #9C2CF3 -13.49%, #3A6FF9 109.75%)",
            borderRadius: "20px",
            padding: "24px",
            display: "flex",
            justifyContent: "space-between",
            mt: "12px",
          }}
        >
          <Box>
            <Typography fontSize={"24px"} fontWeight={"700"}>
              Rs. 15,595.015
            </Typography>
            <Typography>9840030487</Typography>
          </Box>
          <BiLogoVisa size={48} />
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "white",
            color: "secondary.main",
            mt: "12px",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Manage Cards
        </Button>
      </DefaultCard>
      <DefaultCard>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography fontSize={"24px"} fontWeight={"500"}>
            Goals
          </Typography>
          <IconButton>
            <IoMdAddCircleOutline />
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1}>
          <GoalsCard />
          <GoalsCard />
          <IconButton>
            <AiOutlineRight />
          </IconButton>
        </Stack>
      </DefaultCard>
      <DefaultCard
        customSx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography fontSize={"14px"} fontWeight={"700"} color={"gray"}>
            Group
          </Typography>
          <Typography fontSize={"14px"} fontWeight={"700"}>
            Party
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack direction="row" alignItems="center">
            <Avatar
              sx={{
                height: "28px",
                width: "28px",
                border: "2px solid white",
              }}
            />
            <Avatar
              sx={{
                height: "28px",
                width: "28px",
                border: "2px solid white",
                ml: "-4px",
              }}
            />
            <Avatar
              sx={{
                height: "28px",
                width: "28px",
                border: "2px solid white",
                ml: "-4px",
              }}
            />
          </Stack>
          <Typography
            sx={{
              borderRadius: "100%",
              border: "1px dashed gray",
              width: "36px",
              height: "36px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            color="chartPurple.main"
            fontWeight={"700"}
          >
            +5
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          sx={{
            padding: "8px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Image
              src={"/chiya-pasal.png"}
              alt={"chiya pasal"}
              width={36}
              height={36}
            />
            <Box
              sx={{
                ml: "12px",
              }}
            >
              <Typography fontWeight={"700"}>Chiya Pasal</Typography>
              <Typography fontWeight={"600"} color={"gray"}>
                Rs.5409
              </Typography>
            </Box>
          </Stack>
          <IconButton>
            <AiOutlineRight />
          </IconButton>
        </Stack>
      </DefaultCard>
    </Box>
  );
};

export default RightSide;
