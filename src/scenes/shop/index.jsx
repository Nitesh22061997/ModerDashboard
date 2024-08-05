import { Box, Stack, Typography, Rating, Avatar } from '@mui/material';
import React from 'react';
import { data } from "../../data/comment";

const Shop = () => {
    console.log(data);

    return (
        <Box m="15px">
            <Typography ml="15px" variant='h2' component="h2">
                Customer's Feedback
            </Typography >
            {data.map((item) => (
                <Stack key={item.name} m="15px" p="10px" direction="row" alignItems="center">
                    <Avatar alt={item.name} src={item.profileImage} sx={{ marginRight: 2 }} />
                    <Stack direction="column">
                        <Typography variant='h3'>
                            {item.name}
                        </Typography>
                        <Rating
                            name={`rating-${item.name}`}
                            value={item.stars}
                            readOnly
                            precision={0.5}
                        />
                        <Typography variant='body1' sx={{ whiteSpace: 'pre-line' }}>
                            {item.comments}
                        </Typography>

                    </Stack>
                </Stack>
            ))}
        </Box>
    );
}

export default Shop;
