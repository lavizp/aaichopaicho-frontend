import GradientCircle from "@/src/utils/GradientCircle";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/src/utils/logo";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "@/src/firebase/authContext";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "asdasdasdasd",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
      } catch {
        alert("asd");
      }
      router.push("/tracker/dashboard");
      // alert(JSON.stringify(values));
    },
  });
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
            alignItems: "center",
            padding: "24px",
          }}
        >
          <Logo height={50} />
          <Typography>
            Dont have an account?
            <Link href={"/auth/signup"} component={NextLink}>
              {" "}
              Sign up
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            my: 8,
            mx: 4,
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

          <Box sx={{ mt: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={{
                  backgroundColor: "white",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={<Switch size="small" />}
                  label="Remember me"
                />
                <Typography fontSize={"14px"} color={"red"}>
                  Recover Password
                </Typography>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
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
                Log In
              </Button>
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={false}
        md={5}
        display={{
          xs: "none",
          sm: "flex",
          md: "flex",
        }}
        sx={{
          backgroundColor: "black",
          flexDirection: "column-reverse",
          paddingY: "200px",
          paddingX: "24px",
          position: "relative",
        }}
      >
        <Box
          position={"absolute"}
          sx={{
            color: "red",
            left: "-10px",
            bottom: "200px",
          }}
        >
          <GradientCircle />
        </Box>
        <Box
          width={"100%"}
          bgcolor={"rgba(255,242,242,0.13)"}
          padding={"36px"}
          sx={{
            backdropFilter: "blur(50px)",
            borderRadius: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginBottom: "24px",
            }}
          >
            Top Notch Stock Resources
          </Button>
          <Typography fontSize={"16px"} fontWeight={"400"} color={"white"}>
            Today, we create innovative solutions to the challenges that
            consumers face in both their everyday lives and events.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
