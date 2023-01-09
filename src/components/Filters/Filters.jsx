import React, { useState } from "react";

import FilterBlock from "../../assets/styles/blocks/Filters/FiltersComponent/FiltersBlock";

import "../../assets/styles/blocks/Filters/Filters.scss";
import { Box, Slider, Rating, Stack, Button, TextField } from "@mui/material";


function valuetext(value) {
    return `${value}°C`;
}

const Filters = () => {

    let maxValue = 7000;
    let minValue = 2100;

    const [valueSlider, setValueSlider] = useState([minValue, maxValue]);

    const handleChange = (event, newValue) => {
        setValueSlider(newValue);
    }

    return (
        <Box className="filters"
            component="aside"
            sx={{
                minWidth: "270px",
            }}
        >

            <Box>
                <FilterBlock
                    title="Categories"
                    nameFilters="chicken free"
                    amountProducts={52}
                />

                <FilterBlock
                    title="Brands"
                    nameFilters="Chicken fritters"
                />
            </Box>

            <Box className="filters__block">

                <h5 className="filters__block-title">
                    Rating
                </h5>

                <Stack
                    sx={{
                        display: 'inline'
                    }}
                    spacing={1}>
                    <Rating name="size-medium" precision={0.5} />
                </Stack>
            </Box>

            <Box className="filters__block">
                <h5 className="filters__block-title">
                    Price
                </h5>
                <Slider
                    sx={{
                        maxWidth: "230px",
                        ml: "14px",
                        mb: "10px",

                    }}
                    color="success"
                    getAriaLabel={() => 'Calculating range'}
                    value={valueSlider}
                    onChange={handleChange}
                    /* valueLabelDisplay="auto" */ /* numbers above slider */
                    getAriaValueText={valuetext}
                    min={minValue}
                    max={maxValue}
                    step="10"
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>

                    <TextField id="outlined-basic" label="Min" variant="outlined" color="success"
                        value={minValue}
                        sx={{
                            maxWidth: "100px",
                            borderRadius: "12px",
                            textAlign: "center",
                        }}
                    />
                    <TextField id="outlined-basic" label="Max" variant="outlined" color="success"
                        value={maxValue}
                        sx={{
                            maxWidth: "100px",
                            borderRadius: "12px",
                            textAlign: "center",
                        }}
                    />
                </Box>
            </Box>

            <Box className="filters_block"
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                }}>
                <Button variant="contained" color="success" disableElevation>
                    Apply
                </Button>
                <Button
                    variant="text"
                    disableElevation
                    sx={{
                        backgroundColor: "white",
                        color: "grey",
                    }}
                >
                    Reset
                </Button>
            </Box>
        </Box>
    )
}

export default Filters;