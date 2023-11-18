import BaseLayout from "@/src/layouts/baseLayout";
import { Box } from "@mui/material";

import React, { ReactNode } from "react";
import OverviewBalance from "@/src/components/Analytics/OverviewBalance";
import Spendings from "@/src/components/Analytics/Spendings";
import CardDetails from "@/src/components/Analytics/CardDetails";
import AnalyticsSection from "@/src/components/Analytics/AnalyticsSection";

const Analytics = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
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
      <CardDetails />
      <Spendings />
      <OverviewBalance />
      <AnalyticsSection />
    </Box>
  );
};
Analytics.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Analytics;
