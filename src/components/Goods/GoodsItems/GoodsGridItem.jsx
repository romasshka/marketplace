import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../utils/const";


const GoodsGridItem = ({ device }) => {

    const history = useNavigate()

    console.log({history})

    return (
        <Card
            onClick={() => history.push(PRODUCT_ROUTE + '/' + device.id)}
            sx={{
                maxWidth: 268,
                height: "fit-content",
                mb: "15px",

            }}>
            <CardActionArea>
                <CardMedia
                    sx={{
                        width: "-webkit-fill-available",
                        padding: "10px",
                        borderRadius: "4px",
                    }}
                    component="img"
                    height="180"
                    image="https://images.all-free-download.com/images/graphiclarge/bad_kissingen_rose_garden_rose_606635.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {device.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: "5px" }}>
                        It's a detailed description of the goods you're shipping
                    </Typography>
                    <Stack
                        sx={{
                            display: 'inline'
                        }}
                        spacing={1}>
                        <Rating
                            name="size-small"
                            size="small"
                            defaultValue={device.rating}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                </CardContent>
            </CardActionArea>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                >
                    {device.price} USD
                </Typography>
                <Button
                    size="medium"
                    color="success">
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    )
}

export default GoodsGridItem;