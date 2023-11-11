import CardTitle from "@/src/components/Analytics/CardTitle";
import SpendingText from "@/src/components/Dashboard/SpendingText";
import DefaultCard from "@/src/components/DefaultCard";
import BaseLayout from "@/src/layouts/baseLayout";
import { Box, Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import React, { ReactNode } from "react";
const pieData = [
  {
    color: "red",
    value: 66,
    text: "Main Limits",
    actualValue: 10000,
  },
  {
    color: "green",
    value: 31,
    text: "Seconds",
    actualValue: 500,
  },
  {
    color: "gray",
    value: 7,
    text: "Others",
    actualValue: 100,
  },
];
const Analytics = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
          mb={"24px"}
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
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={"24px"}
        >
          <Stack direction={"row"} alignItems={"center"} gap={"128px"}>
            <Stack direction={"column"} alignItems={"center"} gap={"24px"}>
              <CardTitle />
              <CardTitle />
              <CardTitle />
            </Stack>
            <Stack direction={"column"} alignItems={"center"} gap={"24px"}>
              <CardTitle />
              <CardTitle />
              <CardTitle />
            </Stack>
          </Stack>

          <Box
            sx={{
              maxWidth: "100%",
            }}
          >
            <Typography fontSize={"16px"} fontWeight={"400"} color={"gray"}>
              Monthly Limits
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              sx={{
                maxWidth: "100%",
                overflow: "scroll",
              }}
            >
              {pieData.map((item) => {
                return (
                  <Box
                    sx={{
                      position: "relative",
                      width: "fit-content",
                    }}
                    key={item.text}
                  >
                    <PieChart
                      colors={[item.color, "white"]}
                      series={[
                        {
                          data: [
                            { id: 0, value: item.value },
                            { id: 1, value: 100 - item.value },
                          ],
                          innerRadius: 40,
                          outerRadius: 60,
                          paddingAngle: 1,
                          cornerRadius: 0,
                          startAngle: 0,
                          endAngle: 360,
                          cx: 90,
                        },
                      ]}
                      width={180}
                      height={180}
                    ></PieChart>
                    <Typography
                      textAlign={"center"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                    >
                      {item.text}
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"400"}
                    >
                      ${item.actualValue}
                    </Typography>

                    <Box
                      position={"absolute"}
                      sx={{
                        top: "33%",
                        left: "43%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography fontSize={"20px"} fontWeight={"600"}>
                        {item.value}%
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </DefaultCard>
      <DefaultCard>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Spending This Month
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "36px",
            paddingX: {
              sm: "10px",
              md: "10px",
            },
          }}
        >
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10 },
                  { id: 1, value: 15 },
                  { id: 2, value: 20 },
                  { id: 3, value: 20 },
                ],
                innerRadius: 60,
                outerRadius: 120,
                paddingAngle: 1,
                cornerRadius: 0,
                startAngle: -88,
                endAngle: 360,
                cx: 100,
              },
            ]}
            width={200}
            height={250}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <SpendingText name={"Shopping"} color={"chartLightPurple.main"} />
            <SpendingText name={"Phone"} color={"primary.main"} />
            <SpendingText name={"Personal"} color={"chartPurple.main"} />
            <SpendingText name={"Other"} color={"chartBlue.main"} />
          </Box>
        </Box>
      </DefaultCard>
    </Box>
  );
};
Analytics.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Analytics;
