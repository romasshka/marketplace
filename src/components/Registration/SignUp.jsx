import React from "react";

import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/const";
import SignUpForm from "./SignUpForm/SignUpForm";


const SignUp = () => {

    return (
        <div className="signUp">
            <div className="container">
                <div className="signUp__wrapper">
                    <h3 className="signUp-title">
                        Sign In
                    </h3>

                    <p className="signUp-info textAlignCenter">
                        Registration takes less than a minute but gives you full control over your orders.
                    </p>

                    <SignUpForm/>
                    <p className="signUp-text">
                        Already have an account?
                        <Link className="signUp-link" to={LOGIN_ROUTE}>
                            SignIn
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;