import React from "react";
import DefaultCard from "../DefaultCard";
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
import useWindowDimensions from "@/src/hooks/useWindowDimensions";
import { BarChart } from "@mui/x-charts";
const series = [{ data: [1, 5, 2], stack: "a" }];

const OverviewBalance = () => {
  const [age, setAge] = React.useState("Select");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const { tabletView } = useWindowDimensions();
  return (
    <DefaultCard>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        marginBottom={"24px"}
      >
        <Box>
          <Typography fontSize={"24px"} fontWeight={"500"}>
            Overview Balance
          </Typography>
          <Typography fontSize={"12px"} fontWeight={"400"} color={"gray"}>
            This is last weeks data
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100px",
          }}
        >
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
        marginBottom={"24px"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"12px"}
        >
          <Typography fontSize={"16px"} fontWeight={"400"}>
            Last Week
          </Typography>
          <Typography fontSize={"16px"} fontWeight={"400"} color={"green"}>
            $563,443
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={"12px"}
        >
          <Typography fontSize={"28px"} fontWeight={"600"}>
            $563,443
          </Typography>
          <Typography fontSize={"28px"} fontWeight={"600"} color={"green"}>
            7%
          </Typography>
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
          overflow: "scroll",
        }}
      >
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
          // leftAxis={null}
        />
      </Stack>
    </DefaultCard>
  );
};

export default OverviewBalance;
