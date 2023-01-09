import { Box } from "@mui/material";
import React from "react";

import gridIcon from "../../../assets/images/GoodsPageHeader/icon-grid.svg"
import gridList from "../../../assets/images/GoodsPageHeader/icon-list.svg"

import "../../../assets/styles/blocks/GoodsPage/GoodsPageHeader.scss";

const GoodsPageHeader = () => {

    return (

        <Box
            className="goodsPage__header"
            sx={{
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            <h4 className="goodsPage__header-title">
                Fruit and vegetables
            </h4>
            <ul className="goodsPage__header-actions d-flex alignItemsCenter jContentSpaceBtw">
                <li className="goodsPage__header-actions-view">
                    <img className="goodsPage__header-actions-image" src={gridIcon} alt="" />
                    <span className="goodsPage__header-actions-text">
                        Grid view
                    </span>
                </li>
                <li className="goodsPage__header-actions-view">
                    <img className="goodsPage__header-actions-image" src={gridList} alt="" />
                    <span className="goodsPage__header-actions-text">
                        List view
                    </span>
                </li>
            </ul>
        </Box>
    )
}

export default GoodsPageHeader