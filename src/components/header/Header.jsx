import React from "react";

import logo from "../../assets/images/logo.svg";
import ActionsUser from "../Header/header-components/ActionsUser";
import SearchBox from "../Header/header-components/SearchBox";

import { Link } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/const";

import "../../assets/styles/blocks/header.scss";



const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="wrapper d-flex jContentSpaceBtw alignItemsCenter">
                    <div className="header__logo">
                        <Link className="header__logo-link" to={MAIN_ROUTE} >
                            <img className="header__logo-img" src={logo} alt="#" />
                        </Link>
                    </div>
                    <SearchBox />
                    <ActionsUser />
                </div>
            </div>
        </header >
    )
}

export default Header;