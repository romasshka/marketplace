import React from "react";
import { useState } from "react";
import NavigationList from "./NavigationParts/NavigationList.jsx";

import "../../assets/styles/blocks/navigation.scss";

const Navigation = () => {

    const [elements] = useState([
        { id: 1, title: "Bakery", options: ["apples", "potatoes", "lemon",] },
        { id: 2, title: "Fruit and vegetables", options: ["apples", "potatoes", "lemon",] },
        { id: 3, title: "Meat and fish", options: ["apples", "potatoes", "lemon",] },
        { id: 4, title: "Kitchen", options: ["apples", "potatoes", "lemon",] },
        { id: 5, title: "Special nutrition", options: ["apples", "potatoes", "lemon",] },
        { id: 6, title: "Baby", options: ["apples", "potatoes", "lemon",] },
        { id: 7, title: "Pharmacy", options: ["apples", "potatoes", "lemon",] },

    ])


    return (
        <nav className="navbar">
            <div className="container">
                <NavigationList elements={elements}/>
            </div>
        </nav>
    )
}

export default Navigation;