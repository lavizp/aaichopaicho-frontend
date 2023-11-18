import React from "react";
import DefaultCard from "../DefaultCard";
import { Box, Typography } from "@mui/material";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

interface SimpleDashboardCardProps {
  title: string;
  money: number;
  percent: number;
  doesIncrease: boolean;
}

const SimpleDashboardCard: React.FC<SimpleDashboardCardProps> = ({
  title,
  money,
  percent,
  doesIncrease,
}) => {
  return (
    <DefaultCard
      width="fit-content"
      customSx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "180px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "500",
          color: "grey",
        }}
      >
        Total {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Rs. {money}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            color: "grey",
          }}
        >
          from last week
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            color: doesIncrease ? "primary.main" : "red",
          }}
        >
          {doesIncrease ? <BsArrowUpRight /> : <BsArrowDownRight />}
          {percent}%
        </Typography>
      </Box>
    </DefaultCard>
  );
};

export default SimpleDashboardCard;
