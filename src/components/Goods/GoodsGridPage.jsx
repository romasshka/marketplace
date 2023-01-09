import React from 'react';

import { Box } from "@mui/material";

import GoodsGridItem from './GoodsItems/GoodsGridItem';

const GoodsGrid = () => {

    return (
        <Box
            sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 270px)",
                justifyContent: "end",
                columnGap: "35px",
            }}
        >
            <GoodsGridItem />
            <GoodsGridItem />
            <GoodsGridItem />
            <GoodsGridItem />
            <GoodsGridItem />
            <GoodsGridItem />
            <GoodsGridItem />
            <GoodsGridItem />
            <GoodsGridItem />
        </Box >

    )
}

export default GoodsGrid;