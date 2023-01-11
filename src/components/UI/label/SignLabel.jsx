import { TextField } from "@mui/material";
import React from "react";


const SignLabel = ({ subtitle, inputType, placeholder, tabindex }) => {

    return (
        <label>
            <h6 className="signUpForm-title">
                {subtitle}
            </h6>
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
        </label>
    )
}

export default SignLabel;