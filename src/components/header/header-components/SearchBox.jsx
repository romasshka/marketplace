import React from "react";
import searchBtn from "../../../assets/images/searchBtn.svg";


const SearchBox = () => {

    return (
        <div className="header__search d-flex">
            <select className="header__search-select">
                <option className="header__search-title">
                    All categories
                </option>
                <option>photo</option>
            </select>
            <div className="header__search-box d-flex jContentSpaceBtw alignItemsCenter">
                <input className="header__search-input"
                    type="text"
                    name="search"
                    placeholder="Search Products, categories ..." />
                <a className="search-btn d-flex jContentSpaceBtw alignItemsCenter" href="#">
                    <img src={searchBtn} alt="search btn" />
                </a>
            </div>
        </div>
    )
}

export default SearchBox;