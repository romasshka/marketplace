import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import SignIn from "../components/Registration/SignIn.jsx";
import SignUp from "../components/Registration/SignUp.jsx";
import { LOGIN_ROUTE } from "../components/utils/const";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    return (
        <div>
            <Header/>
            <Navigation/>
            {isLogin ?
                <SignIn />
                :
                <SignUp />
            }

        </div>
    )
}

export default Auth;