import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating, Stack } from '@mui/material';

const GoodsListItem = () => {

    return (
        <Card
            sx={{
                width: "fit-content",
                height: "fit-content",
            }}>
            <CardActionArea
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }} >
                <CardMedia
                    sx={{
                        borderRadius: "4px",
                        mr: "32px",
                        maxWidth: "268px",
                    }}
                    component="img"
                    image="https://images.all-free-download.com/images/graphiclarge/bad_kissingen_rose_garden_rose_606635.jpg"
                    alt="green iguana"
                />
                <CardContent
                    sx={{
                        maxWidth: "300px",
                        mr: "32px",
                    }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: "5px" }}>
                        It's a detailed description of the goods you're shipping
                    </Typography>
                    <Stack
                        sx={{
                            display: 'inline'
                        }}
                        spacing={1}>
                        <Rating name="size-small" size="small" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                    <Typography gutterBottom variant="h6" component="p">
                        36.99 USD
                    </Typography>
                    <Button size="large" color="success">
                        Buy Now
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default GoodsListItem;