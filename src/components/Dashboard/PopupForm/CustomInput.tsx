import {
  IconButton,
  MenuItem,
  Popover,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import React from "react";
import { CiCircleInfo } from "react-icons/ci";

interface CustomInputProps {
  placeholder?: string;
  label?: string;
  fullwidth?: boolean;
  popover?: string;
  helperText?: string;
  type?: "date" | "text" | "select";
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  label,
  fullwidth,
  popover,
  helperText,
  type,
}) => {
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
    <Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography fontSize={"14px"}>{label}</Typography>
        {popover && (
          <IconButton onClick={handleClick}>
            <CiCircleInfo size={16} />
          </IconButton>
        )}
        {popover && (
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
            <Typography sx={{ p: 2 }}>{popover}</Typography>
          </Popover>
        )}
      </Stack>
      {type == "select" ? (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          label="Age"
          //   onChange={handleChange}
          size="small"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      ) : type == "date" ? (
        <DatePicker slotProps={{ textField: { size: "small" } }} />
      ) : (
        <TextField
          id="filled-helperText"
          helperText={helperText}
          placeholder={placeholder}
          size="small"
        />
      )}
    </Stack>
  );
};

export default CustomInput;
