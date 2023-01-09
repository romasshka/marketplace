import React from "react";
import NavOption from "./NavOption";

import arrowDown from "../../../assets/images/arrowDown.svg"
import { Link } from "react-router-dom";
import { GOODS_ROUTE } from "../../utils/const";

const NavigationList = ({ elements }) => {

    return (
        <div className="wrapper">
            <ul className="navbar__list d-flex">
                {elements.map(element =>
                    <li className="navbar__list-item" key={element.id}>
                        <Link className="navbar__list-link" to={GOODS_ROUTE}>
                            {element.title}
                            <img className="arrowDown" src={arrowDown} alt="#" />
                        </Link>


                        <NavOption
                            options={element.options}
                            title={element.title}
                        />
                    </li>)}
            </ul>
        </div>
    )
}

export default NavigationList;