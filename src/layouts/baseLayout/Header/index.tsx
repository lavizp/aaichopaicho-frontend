import SearchBar from "@/src/components/SearchBar";
import { Avatar, Box, IconButton, Popover, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfilePopover from "./ProfilePopover";
interface HeaderProps {
  toggleSidebar: () => void;
}
const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {}

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <IconButton aria-describedby={id} onClick={handleClick}>
          <AiOutlineDown />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <ProfilePopover />
        </Popover>
      </Box>
    </Box>
  );
};

export default Header;
