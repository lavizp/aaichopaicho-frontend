import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { relative } from "path";

const Circle = styled("div")({
  width: "200px", // Adjust the size of the circle as needed
  height: "200px",
  borderRadius: "50%",
  background: "radial-gradient(circle, green, transparent)", // You can customize the colors here
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // Add other styles or overrides here
});

function GradientCircle({ content }: { content?: React.ReactNode }) {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          filter: "blur(100px)",
        }}
      >
        <Circle />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        {content ? content : <></>}
      </Box>
    </Box>
  );
}

export default GradientCircle;
