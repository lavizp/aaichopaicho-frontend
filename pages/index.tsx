import { Inter } from "next/font/google";
import { Button, Box } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Button variant="contained">asd</Button>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <Button variant="contained">asd</Button>
        <Button variant="contained">asd</Button>
      </Box>
    </>
  );
}
