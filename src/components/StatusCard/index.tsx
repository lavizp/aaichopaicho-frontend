import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
export enum StatusTypes {
  Completed,
  Error,
  Hold,
  Blocked,
}

interface StatusCardProps {
  status: StatusTypes;
}
const StatusCard: React.FC<StatusCardProps> = ({ status }) => {
  const [stateColors, setStateColor] = useState<{
    color: string;
    bgColor: string;
  }>({ color: "", bgColor: "" });

  const getColor = (status: StatusTypes) => {
    if (status == StatusTypes.Blocked || status == StatusTypes.Error) {
      setStateColor({ color: "#EF4444", bgColor: "rgba(248, 113, 113, 0.20)" });
      return;
    }
    if (status == StatusTypes.Hold) {
      setStateColor({ color: "#F97316", bgColor: "rgba(251, 146, 60, 0.20)" });
      return;
    }
    setStateColor({ color: "#22C55E", bgColor: "rgba(74, 222, 128, 0.20)" });
    return;
  };

  useEffect(() => {
    getColor(status);
  }, []);
  return (
    <Box
      sx={{
        width: "fit-content",
        height: "20px",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        backgroundColor: stateColors.bgColor,
        borderRadius: "360px",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          width: "8px",
          height: "8px",
          borderRadius: "100%",
          backgroundColor: stateColors.color,
        }}
      />

      <Typography
        fontSize={"14px"}
        fontWeight={"400"}
        color={stateColors.color}
      >
        {StatusTypes[status]}
      </Typography>
    </Box>
  );
};

export default StatusCard;
