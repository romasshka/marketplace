import React from "react";

import SignLabel from "../../UI/label/SignLabel.jsx";

const SignInForm = () => {

    return (
        <form className="signInForm d-flex flexDirectionColumn" action="submit">
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

            <button className="signInForm-btn alignSelfCenter" tabindex="3">
                Sign In
            </button>

        </form>
    )
}

export default SignInForm;