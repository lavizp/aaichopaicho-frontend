import { Box, BoxProps, SxProps } from "@mui/material";
import React, { CSSProperties } from "react";
interface DefaultCardProps {
  children: React.ReactNode;
  width?: string;
  customSx?: SxProps;
}
const DefaultCard: React.FC<DefaultCardProps> = ({
  children,
  width,
  customSx,
}) => {
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        ...customSx,
      }}
    >
      {children}
    </Box>
  );
};

export default DefaultCard;
