import React from "react";
import ActionsUser from "../Header/header-components/ActionsUser";
import SearchBox from "../Header/header-components/SearchBox";

import logo from "../../assets/images/logo.svg";


const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="wrapper d-flex jContentSpaceBtw alignItemsCenter">
                    <div className="header__logo">
                        <img className="header__logo-img" src={logo} alt="#" />
                    </div>
                    <SearchBox/>
                    <ActionsUser/>
                </div>
            </div>
        </header >
    )
}

export default Header;