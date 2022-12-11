import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "./utils/const";

const AppRouter = () => {

    const isAuth = false;


    return (
        <Routes>
            {
                isAuth && authRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )
            }
            {
                publicRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
            <Route
                path="*"
                element={<Navigate to={SHOP_ROUTE} replace />}
            />
        </Routes>
    )
}

export default AppRouter;