import React, { useContext } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "./utils/const";

const AppRouter = () => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {
                user.isAuth && authRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )
            }
            {
                publicRoutes.map(({ path, Element }) =>
                    <Route key={path} path={path} element={<Element />} />
                )}
          {  <Route
                path="*"
                element={<Navigate to={SHOP_ROUTE} replace />}
            />}
        </Routes>
    )
}

export default AppRouter;