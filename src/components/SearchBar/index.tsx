import { FormControl, InputAdornment, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

interface SearchBarProps {
  placeholder?: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, handleChange }) => {
  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        fullWidth
        placeholder={placeholder ? placeholder : "Search"}
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
  );
};

export default SearchBar;
