import { Inter } from "next/font/google";
import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Button variant="contained" sx={{ backgroundColor: "primaryLight.main" }}>
        asd
      </Button>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <Button variant="contained">asd</Button>
        <Button variant="contained">asd</Button>
      </Box>
      <Typography>asd</Typography>
      <Link href={"/tracker/dashboard"}>Dashboard</Link>
    </>
  );
}
