import React from "react";

const FilterBlock = ({ title, nameFilters, amountProducts }) => {

    return (
        <div className="filters__block">
            <h5 className="filters__block-title">
                {title}
            </h5>
            <ul className="filter__block-list">
                <li className="filters__block-item">
                    <a className="filters__block-link d-flex jContentSpaceBtw " href="#">
                        {nameFilters}
                        <span>
                            {amountProducts}
                        </span>
                    </a>

                </li>
                <li className="filters__block-item">
                    <a className="filters__block-link" href="#">
                        Filter by brand item
                    </a>
                </li>
                <li className="filters__block-item">
                    <a className="filters__block-link" href="#">
                        Filter by brand item
                    </a>
                </li>
                <li className="filters__block-item">
                    <a className="filters__block-link" href="#">
                        Filter by brand item
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default FilterBlock;