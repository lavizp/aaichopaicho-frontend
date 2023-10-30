import BaseLayout from "@/src/layouts/baseLayout";
import Header from "@/src/layouts/baseLayout/Header";
import Sidebar from "@/src/layouts/baseLayout/Sidebar";
import React, { ReactElement, ReactNode } from "react";

const Dashboard = () => {
  return <>asd</>;
};

Dashboard.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Dashboard;
