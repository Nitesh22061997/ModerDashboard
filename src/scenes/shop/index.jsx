import { Box, Stack, Typography, Rating, Avatar } from '@mui/material';
import React from 'react';
import { data } from "../../data/comment";

const Shop = () => {

    return (
        <Box mt="20px">
            <Typography ml="10px" variant='h2' component="h2">
                Customer's Feedback
            </Typography >
            {data.map((item) => (
                <Stack key={item.name} m="10px" p="5px" direction="row" alignItems="center">
                    <Stack direction="column">
                        <Stack direction="row">
                            <Avatar alt={item.name} src={item.profileImage} sx={{ marginRight: 2 }} />
                            <Typography variant='h3'>
                                {item.name}
                            </Typography>
                        </Stack>

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
