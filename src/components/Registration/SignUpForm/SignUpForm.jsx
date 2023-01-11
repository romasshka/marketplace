import { TextField } from "@mui/material";
import React from "react";

const SignUpForm = () => {

    return (
        <form className="signUpForm d-flex flexDirectionColumn" action="submit">
            <TextField
                id="outlined-basic"
                type="password"
                placeholder="Your password"
                label="Password"
                variant="outlined"
                color="success"
                sx={{
                    width: "100%",
                }}
                />
            <TextField
                id="outlined-basic"
                type="password"
                placeholder="Your password"
                label="Password"
                variant="outlined"
                color="success"
                sx={{
                    width: "100%",
                }} />

            <TextField
                id="outlined-basic"
                type="password"
                placeholder="Your password"
                label="Password"
                variant="outlined"
                color="success"
                sx={{
                    width: "100%",
                }} />

            <TextField
                id="outlined-basic"
                type="password"
                placeholder="Your password"
                label="Password"
                variant="outlined"
                color="success"
                sx={{
                    width: "100%",
                }} />
            <TextField
                id="outlined-basic"
                type="password"
                placeholder="Your password"
                label="Password"
                variant="outlined"
                color="success"
                sx={{
                    width: "100%",
                }} />
            <button className="signUpForm-btn alignSelfCenter">
                Sign Up
            </button>

        </form>
    )
}

export default SignUpForm;