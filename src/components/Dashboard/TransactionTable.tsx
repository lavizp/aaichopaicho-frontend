import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StatusCard, { StatusTypes } from "../StatusCard";
import { Box } from "@mui/material";

function createData(
  name: string,
  date: string,
  amount: number,
  status: StatusTypes
) {
  return { name, date, amount, status };
}

const rows = [createData("Frozen yoghurt", "asd", 6.0, StatusTypes.Error)];
const TransactionTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "gray",
                border: "none",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "gray",
                border: "none",
              }}
            >
              Date
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "gray",
                border: "none",
              }}
            >
              Amount
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "gray",
                border: "none",
              }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <StatusCard status={row.status} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
