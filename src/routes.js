import { USER_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./components/utils/const";
import User from "./pages/User";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";

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
        path: SHOP_ROUTE,
        Element: Shop
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
        path: DEVICE_ROUTE + '/id',
        Element: DevicePage
    },
]