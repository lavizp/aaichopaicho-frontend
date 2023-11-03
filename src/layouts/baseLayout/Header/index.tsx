import SearchBar from "@/src/components/SearchBar";
import { Avatar, Box, IconButton } from "@mui/material";
import React, { ChangeEvent } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
interface HeaderProps {
  toggleSidebar: () => void;
}
const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
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
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <SearchBar handleChange={(e) => {}} />
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <IconButton onClick={() => toggleSidebar()}>
          <GiHamburgerMenu />
        </IconButton>
      </Box>
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
