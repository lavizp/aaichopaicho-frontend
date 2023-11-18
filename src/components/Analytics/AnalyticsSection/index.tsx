import React from "react";
import DefaultCard from "../../DefaultCard";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import LabelText from "./LabelText";
import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import useWindowDimensions from "@/src/hooks/useWindowDimensions";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const dataset = [
  {
    newYork: 86,
    seoul: 21,
    month: "Jan",
  },
  {
    newYork: 78,
    seoul: 28,
    month: "Fev",
  },
  {
    newYork: 106,
    seoul: 41,
    month: "Mar",
  },
  {
    newYork: 92,
    seoul: 73,
    month: "Apr",
  },
  {
    newYork: 92,
    seoul: 99,
    month: "May",
  },
  {
    newYork: 103,
    seoul: 144,
    month: "June",
  },
  {
    newYork: 105,
    seoul: 319,
    month: "July",
  },
  {
    newYork: 106,
    seoul: 249,
    month: "Aug",
  },
  {
    newYork: 95,
    seoul: 131,
    month: "Sept",
  },
  {
    newYork: 97,
    seoul: 55,
    month: "Oct",
  },
  {
    newYork: 76,
    seoul: 48,
    month: "Nov",
  },
  {
    newYork: 103,
    seoul: 25,
    month: "Dec",
  },
];

const valueFormatter = (value: number) => `${value}mm`;
const AnalyticsSection = () => {
  const [year, setYear] = React.useState("2020");

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  const { tabletView } = useWindowDimensions();
  return (
    <DefaultCard>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Typography sx={{ flex: 1 }} fontSize={"24px"} fontWeight={"700"}>
          Analytics
        </Typography>
        <Stack direction={"row"} gap="36px" alignItems={"center"}>
          <LabelText color={"#64CFF6"} text={"Income"} />
          <LabelText color={"#6359E9"} text={"Outcome"} />
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <InputLabel id="demo-select-small-label">Year</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={year}
              label="Year"
              onChange={handleChange}
            >
              <MenuItem value={10}>2020</MenuItem>
              <MenuItem value={20}>2019</MenuItem>
              <MenuItem value={30}>2018</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        marginBottom={"24px"}
        sx={{
          width: tabletView ? "300px" : "100%",
        }}
      >
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "newYork", valueFormatter, color: "#64CFF6" },
            { dataKey: "seoul", valueFormatter, color: "#6359E9" },
          ]}
          {...chartSetting}
        />
      </Stack>
    </DefaultCard>
  );
};

export default AnalyticsSection;
