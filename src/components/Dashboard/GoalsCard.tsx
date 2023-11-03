import { Box, Typography } from "@mui/material";
import React from "react";

const GoalsCard = () => {
  return (
    <Box
      sx={{
        width: "140px",
        height: "170px",
        backgroundColor: "#000000",
        boxShadow:
          "0px 0px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 16px 24px 0px rgba(0, 0, 0, 0.06)",
        borderRadius: "28px",
        color: "white",
        padding: "16px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography fontWeight={"500"} fontSize={"18px"}>
          Rs.200
        </Typography>
        <Typography fontSize={"12px"}>12/20/2024</Typography>
      </Box>
      <Typography fontWeight={"500"} fontSize={"18px"}>
        XBox
      </Typography>
    </Box>
  );
};

export default GoalsCard;
