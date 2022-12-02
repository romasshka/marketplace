import React from "react";
import NavOption from "./NavOption";

import arrowDown from "../../../assets/images/arrowDown.svg"

const NavigationList = ({ elements }) => {

    return (
        <div className="wrapper">
            <ul className="navbar__list d-flex">
                {elements.map(element =>
                    <li className="navbar__list-item" key={element.id}>
                        <a className="navbar__list-link" href="#">
                            {element.title}
                            <img className="arrowDown" src={arrowDown} alt="#" />
                        </a>


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