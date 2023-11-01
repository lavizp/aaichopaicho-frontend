import DefaultCard from "@/src/components/Card";
import SimpleDashboardCard from "@/src/components/Dashboard/SimpleDashboardCard";
import SpendingText from "@/src/components/Dashboard/SpendingText";
import BaseLayout from "@/src/layouts/baseLayout";
import { Box, Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { PieChart } from "@mui/x-charts/PieChart";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TransactionTable from "@/src/components/Dashboard/TransactionTable";
import LeftSide from "@/src/components/Dashboard/LeftSide";
import RightSide from "@/src/components/Dashboard/RightSide";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: {
          sm: "wrap",
          md: "nowrap",
        },
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
