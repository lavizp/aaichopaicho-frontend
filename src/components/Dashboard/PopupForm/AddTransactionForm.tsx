import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CustomInput from "./CustomInput";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";

const AddTransactionForm = () => {
  return (
    <Stack
      sx={{
        width: {
          xs: "100%",
          sm: "500px",
          md: "800px",
        },
      }}
      gap={"24px"}
    >
      <Typography fontSize={"32px"} fontWeight={"500"}>
        Add Transaction
      </Typography>
      <CustomInput
        placeholder="Ex: Breeze Cafe"
        label="Transaction Name"
        popover="name of the transaction"
      />
      <CustomInput
        placeholder="Ex: Breeze Cafe"
        label="Transaction Name"
        popover="name of the transaction"
        type="select"
      />
      <CustomInput
        placeholder="Ex: Breeze Cafe"
        label="Transaction Name"
        popover="name of the transaction"
        type="date"
      />
      <CustomInput placeholder="12" label="Amount" popover="amount of money" />
      <CustomInput
        placeholder="Ex: Breeze Cafe"
        label="Transaction Name"
        popover="name of the transaction"
        type="select"
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} gap={"24px"}>
          <Button
            variant="contained"
            sx={{
              color: "white",
            }}
          >
            Upload
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "coral",
            }}
          >
            Update
          </Button>
        </Stack>
        <Button
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "red",
          }}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddTransactionForm;
