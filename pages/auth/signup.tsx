import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Radio,
  Switch,
  TextField,
  ToggleButton,
  Typography,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { BiSolidZap } from "react-icons/bi";
import GradientCircle from "@/src/utils/GradientCircle";
import NextLink from "next/link";
import Logo from "@/src/utils/logo";

const signup = () => {
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", position: "relative" }}
    >
      <Grid
        item
        xs={false}
        sm={false}
        md={5}
        sx={{
          backgroundColor: "black",
          height: "full",
          padding: "24px",
        }}
      >
        <Logo />
        <Box
          display={{
            xs: "none",
            sm: "flex",
            md: "flex",
          }}
          sx={{
            gap: "3px",
            paddingX: "24px",
            position: "relative",
            flexDirection: "column",
            paddingY: "200px",
          }}
        >
          <Box
            position={"absolute"}
            sx={{
              color: "red",
              right: "0px",
              bottom: "50px",
            }}
          >
            <GradientCircle
              content={
                <Button
                  variant="contained"
                  startIcon={<BiSolidZap />}
                  sx={{
                    backgroundColor: "#5A5A5A",
                    color: "white",
                    width: "200px",
                    borderRadius: 50,
                  }}
                >
                  Easy and Quick
                </Button>
              }
            />
          </Box>
          <Button
            variant="contained"
            startIcon={<BiSolidZap />}
            sx={{
              borderRadius: 50,
              width: "200px",
            }}
          >
            Aicho Pacho
          </Button>
          <Button
            variant="text"
            sx={{
              width: "220px",
              color: "white",
            }}
          >
            Valuable and Farsghted
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        md={7}
        component={Paper}
        elevation={6}
        square
        sx={{
          backgroundColor: "backgroundColor.light",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            alignItems: "center",
            padding: "24px",
          }}
        >
          <Typography>
            Already have an account?{" "}
            <Link href={"/auth/login"} component={NextLink}>
              {" "}
              Log In
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            my: 5,
            mx: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: {
              xs: "12px",
              md: "120px",
            },
          }}
        >
          <Box
            sx={{
              marginY: "12px",
            }}
          >
            <Typography
              component="h1"
              fontSize={"36px"}
              fontWeight={700}
              color={"primary"}
              textAlign={"center"}
            >
              Create Account
            </Typography>
            <Typography
              component="h1"
              fontSize={"18px"}
              fontWeight={400}
              textAlign={"center"}
            >
              Getting Started is easy
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              startIcon={<FcGoogle />}
              sx={{
                color: "black",
                fontSize: "12px",
                fontWeight: 500,
                backgroundColor: "white",
                borderColor: "black",
                "&:hover": {
                  borderColor: "primary",
                },
              }}
            >
              Google
            </Button>
          </Box>
          <Divider
            sx={{
              color: "black",
              width: "100%",
              marginY: "24px",
            }}
          >
            Or continue with
          </Divider>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full name"
              name="name"
              autoComplete="text"
              autoFocus
              sx={{
                backgroundColor: "white",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                backgroundColor: "white",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                backgroundColor: "white",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              sx={{
                backgroundColor: "white",
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 5,
                mb: 2,
                py: 2,
                color: "black",
                fontSize: "12px",
                fontWeight: 500,
                borderRadius: "10px",
                borderColor: "black",
                "&:hover": {
                  borderColor: "primary",
                },
              }}
            >
              Create Account
            </Button>
            <Typography fontSize={"14px"} fontWeight={300} textAlign={"center"}>
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default signup;
