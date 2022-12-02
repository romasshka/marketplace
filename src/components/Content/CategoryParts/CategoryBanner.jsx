import React from "react";

const CategoryBanner = ({ backgroundImage }) => {


    return (
        <div className="category__banner d-flex flexDirectionColumn jContentSpaceEvenly"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="category__banner-box">
                <h3 className="category__banner-title">
                    Space for heading
                </h3>
                <p className="category__banner-subtitle">
                    Banner sub focus
                </p>
            </div>

            <a className="category__banner-btn" href="#">
                Read more
            </a>
        </div>
    )
}

export default CategoryBanner;