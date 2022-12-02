import React from "react";
import accUser from "../../../assets/images/acc-user.svg";
import basket from "../../../assets/images/basket.svg";

const ActionsUser = () => {

    return (
        <div className="header-actions d-flex">
            <li className="header-actions__user">
                <a className="header-actions__user-link" href="#">
                    <img className="header-actions__user-img" src={accUser} alt="#" />
                </a>
            </li>
            <li className="header-actions__basket">
                <a className="header-actions__basket-link" href="#">
                    <img className="header-actions__basket-img" src={basket} alt="#" />
                </a>
            </li>
        </div>
    )
}

export default ActionsUser;