import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/const.js";

const CategoryBanner = observer(({ backgroundImage }) => {


    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            className="category__banner"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            sx={{
                pl: "30px",
            }}
        >
            <Typography
                variant="h3"
                variantMapping="h3"
                sx={{
                    lineHeight: "33px",
                    fontSize: "22px",
                    fontWeight: "600"
                }}>
                Space for heading
            </Typography>
            <Typography
                variant="p"
                className="category__banner-subtitle">
                Banner sub focus
            </Typography>
            <Button
                component={NavLink}
                to={MAIN_ROUTE}
                color="success"
                className="category__banner-btn" href="#">
                Read more
            </Button>
        </Box >
    )
})

export default CategoryBanner;