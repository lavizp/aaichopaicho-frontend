import { Box, Stack, Typography } from "@mui/material";
import React from "react";
interface LabelTextProps {
  color: string;
  text: string;
}
const LabelText: React.FC<LabelTextProps> = ({ color, text }) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
      <Box
        sx={{
          backgroundColor: color,
          width: "12px",
          height: "12px",
          borderRadius: "100%",
        }}
      />
      <Typography fontSize={"16px"} fontWeight={"700"}>
        {text}
      </Typography>
    </Stack>
  );
};

export default LabelText;
