import SearchBar from "@/src/components/SearchBar";
import { Avatar, Box } from "@mui/material";
import React, { ChangeEvent } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {}

  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px 36px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <SearchBar handleChange={(e) => {}} />
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
