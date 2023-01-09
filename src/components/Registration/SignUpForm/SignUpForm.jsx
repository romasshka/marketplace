import React from "react";

import RegistrationInput from "../../UI/inputs/RegistrationInput.jsx";
import SignLabel from "../../UI/label/SignLabel.jsx";

const SignUpForm = () => {

    return (
        <form className="signUpForm d-flex flexDirectionColumn" action="submit">
            <SignLabel
                subtitle="Full name"
                inputType="text"
                placeholder="Your full name"
                tabindex="1"
            />

            <SignLabel
                subtitle="Email"
                inputType="email"
                placeholder="Your working email"
                tabindex="2"
            />
            <SignLabel
                subtitle="Password"
                inputType="password"
                placeholder="Enter password"
                tabindex="3"
            />
            <SignLabel
                subtitle="Confirm Password"
                inputType="password"
                placeholder="Repeat the password"
                tabindex="4"
            />

            <button className="signUpForm-btn alignSelfCenter" tabindex="5">
                Sign Up
            </button>

        </form>
    )
}

export default SignUpForm;