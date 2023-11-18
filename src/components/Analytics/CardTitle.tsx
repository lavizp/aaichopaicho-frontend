import { Box, Typography } from "@mui/material";
import React from "react";

const CardTitle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Typography fontSize={"16px"} fontWeight={"400"} color={"gray"}>
        Card Name
      </Typography>
      <Typography fontSize={"18px"} fontWeight={"500"}>
        Main Balance
      </Typography>
    </Box>
  );
};

export default CardTitle;
