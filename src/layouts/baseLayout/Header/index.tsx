import {
  Avatar,
  Box,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {}

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        padding: "20px 36px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FormControl>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          placeholder="Search"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BiSearch />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <RxCross1 />
              </InputAdornment>
            ),
            sx: {
              borderRadius: "8px",
            },
          }}
        />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: 24,
            height: 24,
          }}
        />
        <AiOutlineDown />
      </Box>
    </Box>
  );
};

export default Header;
