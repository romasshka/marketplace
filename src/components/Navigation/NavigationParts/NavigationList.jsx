import React from "react";
import NavOption from "./NavOption";
import NavLink from "../../NavLink.tsx";

import arrowDown from "../../../assets/images/arrowDown.svg"
import { GOODS_ROUTE } from "../../utils/const";
import { Button, List, ListItem } from "@mui/material";

const NavigationList = ({ elements }) => {

    return (
        <div className="wrapper">
            <List className="navbar__list d-flex">
                {elements.map(element =>
                    <ListItem key={element.id}>
                        <Button
                            className="navbar__list-link"
                            to={GOODS_ROUTE}
                            component={NavLink}
                        >
                            {element.title}
                            <img className="arrowDown" src={arrowDown} alt="#" />
                        </Button>


                        <NavOption
                            options={element.options}
                            title={element.title}
                        />
                    </ListItem>)}
            </List>
        </div>
    )
}

export default NavigationList;