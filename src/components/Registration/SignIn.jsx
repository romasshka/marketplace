import React from "react";
import SignInForm from "./SignInForm/SighInForm.jsx";

import "../../assets/styles/blocks/SignIn.scss";


const SignIn = () => {

    return (
        <div className="signIn">
            <div className="container">
                <div className="signIn__wrapper">
                    <h3 className="signIn-title">
                        Sign In
                    </h3>

                    <p className="signIn-info textAlignCenter">
                        Sign in to your account using email and password provided during registration.
                    </p>
                    
                    <SignInForm />

                </div>
            </div>
        </div>
    )
}

export default SignIn;