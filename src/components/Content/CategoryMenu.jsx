import React, { useState } from "react";
import CategoryAside from "./CategoryParts/CategoryAside";
import CategoryBanner from "./CategoryParts/CategoryBanner";

import bakery from "../../images/bakery.jpg"

const CategoryMenu = () => {

    const [elements] = useState([
        { id: 1, title: "Bakery", image: {bakery}, options: ["apples", "potatoes", "lemon",] },
        { id: 2, title: "Fruit and vegetables", image: {bakery}, options: ["apples", "potatoes", "lemon",] },
        { id: 3, title: "Meat and fish", image: {bakery}, options: ["apples", "potatoes", "lemon",] },
        { id: 4, title: "Kitchen", image: {bakery}, options: ["apples", "potatoes", "lemon",] },
        { id: 5, title: "Special nutrition", image: {bakery}, options: ["apples", "potatoes", "lemon",] },
        { id: 6, title: "Baby", image: {bakery}, options: ["apples", "potatoes", "lemon",] },
        { id: 7, title: "Pharmacy", image: {bakery}, options: ["apples", "potatoes", "lemon",] },

    ])

    return (

        <div className="category">
            <div className="container">
                <div className="wrapper d-flex jContentSpaceBtw">
                    <CategoryAside elements={elements} />
                    <CategoryBanner backgroundImage={bakery}/>
                    <CategoryBanner backgroundImage={bakery}/>
                </div>

                <div className="wrapper d-flex jContentSpaceBtw">
                    <CategoryAside elements={elements} />
                    <CategoryBanner />
                    <CategoryBanner />
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu;