import React from "react";

import { Box } from "@mui/material";
import GoodsListItem from "./GoodsItems/GoodsListItem";


const GoodsListPage = () => {

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
        }}>
            <GoodsListItem/>
        </Box>
    )
}

export default GoodsListPage;