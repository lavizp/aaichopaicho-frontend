import { Inter } from "next/font/google";
import { Button, Box, Typography, useTheme, alpha } from "@mui/material";
import Link from "next/link";
import { BarChart } from "@mui/x-charts/BarChart";
import { ChartsYAxis } from "@mui/x-charts";
const series = [{ data: [1, 5, 2], stack: "a" }];
const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: [
      theme.palette.primary.main,
      alpha(theme.palette.primary.main, 0.25),
    ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "40px",
      },
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        // formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};
export default function Home() {
  return (
    <>
      <Button variant="contained" sx={{ backgroundColor: "primaryLight.main" }}>
        asd
      </Button>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <Button variant="contained">asd</Button>
        <Button variant="contained">asd</Button>
      </Box>
      <Typography>asd</Typography>
      <Link href={"/tracker/dashboard"}>Dashboard</Link>
      <BarChart
        series={series}
        width={500}
        height={350}
        slotProps={{
          bar: {
            rx: 5,
            height: "100%",
            width: "12px",
          },
        }}
        xAxis={[
          {
            scaleType: "band",
            data: ["A", "B", "C", "D", "E"],
            disableLine: true,
          },
        ]}
        leftAxis={null}
      />
    </>
  );
}
