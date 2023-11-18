import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import CustomInput from "./CustomInput";

const AddGoalsForm = () => {
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
        Goals
      </Typography>
      <CustomInput
        placeholder="Ex: Morty Smith"
        label="Name"
        popover="name of the goal"
      />
      <CustomInput
        placeholder="Ex: Morty Smith"
        label="Date"
        popover="name of the goal"
        type="date"
      />
      <CustomInput
        placeholder="Ex: Buy a Mustang"
        label="Gol Description"
        popover="name of the transaction"
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

export default AddGoalsForm;
