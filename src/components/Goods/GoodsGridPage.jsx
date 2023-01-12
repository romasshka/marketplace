import React, { useContext } from 'react';

import { Box } from "@mui/material";

import GoodsGridItem from './GoodsItems/GoodsGridItem';
import { observer } from 'mobx-react-lite';
import { Context } from "../..";

const GoodsGrid = observer(() => {

    const { device } = useContext(Context)

    return (
        <Box
            sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 270px)",
                justifyContent: "start",
                columnGap: "35px",
            }}
        >

            {device.devices.map(device =>
                <GoodsGridItem key={device.id} device={device} />
            )}
        </Box >

    );
});

export default GoodsGrid;