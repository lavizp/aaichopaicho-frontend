import DefaultCard from "@/src/components/DefaultCard";
import SimpleDashboardCard from "@/src/components/Dashboard/SimpleDashboardCard";
import SpendingText from "@/src/components/Dashboard/SpendingText";
import BaseLayout from "@/src/layouts/baseLayout";
import { Box, Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import LeftSide from "@/src/components/Dashboard/LeftSide";
import RightSide from "@/src/components/Dashboard/RightSide";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "space-between",
          lg: "space-between",
        },
        flexWrap: {
          xs: "wrap",
          sm: "wrap",
          md: "wrap",
          lg: "nowrap",
        },
        gap: "24px",
      }}
    >
      <LeftSide />
      <RightSide />
    </Box>
  );
};

Dashboard.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Dashboard;
