import React from "react";
import { useState } from "react";
import NavigationList from "./NavigationParts/NavigationList.jsx";

import "../../assets/styles/blocks/navigation.scss";

const Navigation = () => {

    return (
        <nav className="navbar">
            <div className="container">
                <NavigationList elements={elements}/>
            </div>
        </nav>
    )
}

export default Navigation;