import { Button, List, ListItem } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../..";

import NavLink from "../../NavLink.tsx";

const CategoryAside = observer(() => {

    const { device } = useContext(Context)

    return (
        <aside className="category__aside">
            <h4 className="category__aside-title">
                Category menu
            </h4>

            <List>
                {device.types.map(type =>
                    <ListItem
                        sx={{
                            py: "3px"
                        }}>
                        <Button
                            key={type.id}
                            component={NavLink}
                            underline="none"
                            sx={{
                                py: "0px",
                                color: "green",
                            }}>
                            {type.name}
                        </Button>
                    </ListItem>
                )
                }
            </List>



            <a className="category__btn" href="#">
                More categories
            </a>
        </aside >
    );
});

export default CategoryAside;