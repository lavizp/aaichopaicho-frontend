import { Box, Typography } from "@mui/material";
import React from "react";
interface SpendingTextProps {
  name: string;
  color: string;
}
const SpendingText: React.FC<SpendingTextProps> = ({ name, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Box
        sx={{
          width: "37px",
          height: "13px",
          borderRadius: "33px",
          backgroundColor: color,
        }}
      ></Box>
      <Typography fontSize={"16px"} fontWeight={"600"} color={"gray"}>
        {name}
      </Typography>
    </Box>
  );
};

export default SpendingText;
