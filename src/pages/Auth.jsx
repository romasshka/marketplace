import React from "react";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation.jsx";
import SignIn from "../components/Registration/SignIn.jsx";
import SignUp from "../components/Registration/SignUp.jsx";

const Auth = () => {

    return(
        <div>
            <Header/>
            <Navigation/>
            <SignIn/>

            <SignUp/>
        </div>
    )
}

export default Auth;