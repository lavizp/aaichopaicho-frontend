import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DefaultCard from "../Card";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import SimpleDashboardCard from "./SimpleDashboardCard";
import SpendingText from "./SpendingText";
import { PieChart } from "@mui/x-charts/PieChart";
import { DatePicker } from "@mui/x-date-pickers";
import TransactionTable from "./TransactionTable";

const LeftSide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <DefaultCard>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              fontSize={"28px"}
              fontWeight={"700"}
              color={"secondary"}
            >
              Hello, Harry!
            </Typography>
            <Typography fontSize={"16px"} fontWeight={"400"} color={"#A0A0A0"}>
              Send and receive funds with pleasure.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
              }}
              endIcon={<AiOutlinePlus />}
            >
              Add Payment
            </Button>
            <BsThreeDots />
          </Box>
        </Box>
      </DefaultCard>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <SimpleDashboardCard
          title={"Income"}
          money={97499}
          percent={0}
          doesIncrease={true}
        />
        <SimpleDashboardCard
          title={"Income"}
          money={97499}
          percent={0}
          doesIncrease={true}
        />
        <SimpleDashboardCard
          title={"Income"}
          money={97499}
          percent={0}
          doesIncrease={true}
        />
      </Box>
      <DefaultCard>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Spending This Month
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "36px",
              paddingX: {
                sm: "10px",
                md: "100px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "12px",
                flex: 1,
              }}
            >
              <SpendingText name={"Shopping"} color={"chartLightPurple.main"} />
              <SpendingText name={"Phone"} color={"primary.main"} />
              <SpendingText name={"Personal"} color={"chartPurple.main"} />
              <SpendingText name={"Other"} color={"chartBlue.main"} />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "fit-content",
              }}
            >
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10 },
                      { id: 1, value: 15 },
                      { id: 2, value: 20 },
                      { id: 3, value: 20 },
                    ],
                    innerRadius: 80,
                    outerRadius: 120,
                    paddingAngle: 1,
                    cornerRadius: 0,
                    startAngle: -88,
                    endAngle: 360,
                    cx: 120,
                  },
                ]}
                width={264}
                height={264}
              />
              <Box
                position={"absolute"}
                sx={{
                  top: "38%",
                  left: "21%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography fontSize={"30px"} fontWeight={"800"}>
                  $138.00
                </Typography>
                <Typography fontSize={"14px"}>SPEND THIS MONTH</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </DefaultCard>
      <DefaultCard>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Transaction
          </Typography>
          <DatePicker
            label="Select Date"
            slotProps={{
              textField: { size: "small" },
              inputAdornment: {
                position: "start",
              },
            }}
          />
        </Box>
        <TransactionTable />
      </DefaultCard>
    </Box>
  );
};

export default LeftSide;
