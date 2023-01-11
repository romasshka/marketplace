import React from "react";

import "../../assets/styles/blocks/SignIn.scss";

import { Box } from "@mui/system";
import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import NavLink from "../NavLink.tsx";
import { REGISTRATION_ROUTE, MAIN_ROUTE } from "../utils/const";



const SignIn = () => {

    return (
        <Container>
            <Box
                component="form"
                noValidate
                display="flex"
                flexDirection={"column"}
                maxWidth={400}
                alignItems="center"
                justifyContent={"center"}
                margin={"auto"}
            >

                <Typography
                    textAlign={"center"}
                    variant="h4"
                    marginBottom={"15px"}
                >
                    Sign in
                </Typography>
                <Typography
                    marginBottom={"20px"}
                    variantMapping={"p"}
                    textAlign={"center"}
                >
                    Sign in to your account using email and password provided during registration.
                </Typography>

                <TextField
                    id="outlined-basic"
                    type="email"
                    tabIndex="1"
                    placeholder="Your password"
                    label="Email"
                    variant="outlined"
                    color="success"
                    sx={{
                        width: "100%",
                        mb: "20px",
                    }}
                />


                <TextField
                    id="outlined-basic"
                    type="password"
                    tabIndex="2"
                    placeholder="Your password"
                    label="Password"
                    variant="outlined"
                    color="success"
                    sx={{
                        width: "100%",
                    }}
                />

                <Box
                    width="-webkit-fill-available"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        px: "10px",
                        mb: "5px",
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox value="remember" color="success" />}
                        label="Remember me"
                        tabIndex="3"
                    />
                    <Button
                        component={NavLink}
                        to={REGISTRATION_ROUTE}
                        underline="none"
                        tabIndex="4"
                        sx={{
                            color: "green"
                        }}
                    >
                        Forgot password?
                    </Button>
                </Box>

                <Button
                    component={NavLink}
                    to={MAIN_ROUTE}
                    variant="contained"
                    color="success"
                    tabIndex="5"
                    sx={{
                        width: "100%",
                        mb: "15px",
                    }}
                >
                    Sign In
                </Button>

                <Grid container>
                    <Grid item>
                        <Button
                            variant="text"
                            color="success"
                            component={NavLink}
                            to={REGISTRATION_ROUTE}
                        >
                            {"Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}

export default SignIn;