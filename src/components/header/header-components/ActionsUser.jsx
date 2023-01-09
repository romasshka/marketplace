import React from "react";

import { Link } from "react-router-dom";
import { BASKET_ROUTE, LOGIN_ROUTE } from "../../utils/const";

import accUser from "../../../assets/images/acc-user.svg";
import basket from "../../../assets/images/basket.svg";

const ActionsUser = () => {

    return (
        <div className="header-actions d-flex">
            <li className="header-actions__user">
                <Link className="header-actions__user-link" to={LOGIN_ROUTE}>
                    <img className="header-actions__user-img" src={accUser} alt="logIn image" />
                </Link>
            </li>
            <li className="header-actions__basket">
                <Link className="header-actions__basket-link" to={BASKET_ROUTE}>
                    <img className="header-actions__basket-img" src={basket} alt="basket image" />
                </Link>
            </li>
        </div>
    )
}

export default ActionsUser;