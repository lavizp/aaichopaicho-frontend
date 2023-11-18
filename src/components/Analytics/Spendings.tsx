import React from "react";
import DefaultCard from "../DefaultCard";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import SpendingText from "../Dashboard/SpendingText";

const Spendings = () => {
  return (
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
  );
};

export default Spendings;
