import DefaultCard from "@/src/components/DefaultCard";
import BaseLayout from "@/src/layouts/baseLayout";
import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

const Snalytics = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "space-between",
          lg: "space-between",
        },
        flexWrap: {
          xs: "wrap",
          sm: "wrap",
          md: "wrap",
          lg: "nowrap",
        },
        gap: "24px",
      }}
    >
      <DefaultCard
        customSx={{
          width: "100%",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Typography fontSize={"24px"} fontWeight={"500"}>
            Card Details
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={"24px"}
          >
            <Typography
              fontSize={"16px"}
              fontWeight={"600"}
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              color={"#363062"}
            >
              Generate Number
            </Typography>
            <Typography
              fontSize={"16px"}
              fontWeight={"600"}
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              color={"#363062"}
            >
              Edit
            </Typography>
          </Stack>
        </Stack>
      </DefaultCard>
    </Box>
  );
};
Snalytics.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Snalytics;
