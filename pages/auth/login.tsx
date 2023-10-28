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
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const Login = () => (
  <Grid container component="main" sx={{ height: "100vh" }}>
    <Grid
      item
      xs={12}
      sm={9}
      md={7}
      component={Paper}
      elevation={6}
      square
      px={"120px"}
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            Welcome Back
          </Typography>
          <Typography
            component="h1"
            fontSize={"18px"}
            fontWeight={400}
            textAlign={"center"}
          >
            Login into your account
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              mb: 2,
              py: 2,
              color: "black",
              fontSize: "12px",
              fontWeight: 500,

              borderColor: "black",
              "&:hover": {
                borderColor: "primary",
              },
            }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Box>
      </Box>
    </Grid>
    <Grid
      item
      xs={false}
      sm={3}
      md={5}
      sx={{
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  </Grid>
);

export default Login;
