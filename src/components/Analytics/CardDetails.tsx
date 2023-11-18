import React from "react";
import DefaultCard from "../DefaultCard";
import { Box, Stack, Typography } from "@mui/material";
import CardTitle from "./CardTitle";
import { PieChart } from "@mui/x-charts";
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
const CardDetails = () => {
  return (
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
        gap={"12px"}
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
  );
};

export default CardDetails;
