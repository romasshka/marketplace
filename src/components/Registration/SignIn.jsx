import React from "react";
import RegistrationEmail from "../UI/inputs/registrationEmail";

const SignIn = () => {

    return (
        <div className="signIn">
            <div className="container">
                <div className="wrapper">
                    <h3 className="sighIn-title">
                        Sign In
                    </h3>

                    <p className="signIn-info">
                        Sign in to your account using email and password provided during registration.
                    </p>

                    <div className="signIn__email">
                        <p className="signIn__email-title">
                            Email
                        </p>

                        <RegistrationEmail/>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;