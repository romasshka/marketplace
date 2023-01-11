import React, { useState } from "react";
import CategoryAside from "../components/Content/CategoryParts/CategoryAside";
import CategoryBanner from "../components/Content/CategoryParts/CategoryBanner";

import fruit from "../assets/images/fruit.jpg"

import "../assets/styles/blocks/category.scss";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

const Shop = () => {

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

        <div className="category">
            <div className="container">

                <Header />
                <Navigation />

                <div className="wrapper d-flex jContentSpaceBtw">
                    <CategoryAside elements={elements} />
                    <CategoryBanner backgroundImage={fruit} />
                    <CategoryBanner backgroundImage={fruit} />
                </div>

                <div className="wrapper d-flex jContentSpaceBtw">
                    <CategoryAside elements={elements} />
                    <CategoryBanner backgroundImage={fruit} />
                    <CategoryBanner backgroundImage={fruit} />
                </div>
            </div>
        </div>
    );
}

export default Shop;