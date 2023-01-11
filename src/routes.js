
import { USER_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, GOODS_ROUTE } from "./components/utils/const";
import User from "./pages/User";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import GoodsPage from "./pages/GoodsPage";

export const authRoutes = [
    {
        path: USER_ROUTE,
        Element: User
    },
    {
        path: BASKET_ROUTE,
        Element: Basket
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: Main
    },
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Auth
    },
    {
        path: GOODS_ROUTE,
        Element: GoodsPage
    },
]