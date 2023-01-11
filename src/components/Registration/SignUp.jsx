import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

import NavLink from "../NavLink.tsx";

import { MAIN_ROUTE } from "../utils/const";
/* import SignUpForm from "./SignUpForm/SignUpForm"; */


const SignUp = () => {

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
                    Sign Up
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
                    type="text"
                    tabIndex="1"
                    placeholder="Your full name"
                    label="Full Name"
                    variant="outlined"
                    color="success"
                    sx={{
                        width: "100%",
                        mb: "20px",
                    }}
                />

                <TextField
                    id="outlined-basic"
                    type="email"
                    tabIndex="2"
                    placeholder="yourGmail@gmail.com"
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
                    tabIndex="3"
                    placeholder="Your password"
                    label="Password"
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
                    tabIndex="4"
                    placeholder="Confirm password"
                    label="Confirm your"
                    variant="outlined"
                    color="success"
                    sx={{
                        width: "100%",
                        mb: "20px",
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
                    Sign Up
                </Button>
            </Box>
        </Container>
    )
}

export default SignUp;