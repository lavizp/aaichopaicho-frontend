import { Box } from "@mui/material";
import React from "react";
interface DefaultCardProps {
  children: React.ReactNode;
  width?: string;
}
const DefaultCard: React.FC<DefaultCardProps> = ({ children, width }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        width: width ? width : "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default DefaultCard;
