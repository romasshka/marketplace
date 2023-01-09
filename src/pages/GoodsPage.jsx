import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Filters from "../components/Filters/Filters";
import GoodsGridPage from "../components/Goods/GoodsGridPage";
import GoodsPageHeader from "../components/Goods/GoodsHeader/GoodsPageHeader";
import GoodsListPage from "../components/Goods/GoodsListPage";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

const GoodsPage = () => {

    return (
        <>
            <Header />
            <Navigation />
            <Box className="goods">
                <Container maxWidth="false"
                    sx={{
                        maxWidth: "1308px",
                    }} >
                    <GoodsPageHeader />
                    <Box
                        sx={{
                            display: "flex",
                        }}
                    >
                        <Filters />
                        <GoodsGridPage />
                    {/*    <GoodsListPage/> */}
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default GoodsPage;