import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Wallet = () => {
    return (
        <Box>
            <Box display="flex" justifyContent="space-around" >
                <Box my={4}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center">
                            <Avatar alt="no" src="https://w7.pngwing.com/pngs/156/169/png-transparent-target-logo-target-corporation-logo-target-icon-logo-text-retail-symbol-thumbnail.png" sx={{ marginRight: 1 }} />
                            <Typography>
                                Popular Dishes
                            </Typography>
                        </Box>
                        <Box pl={18}>

                            <ArrowCircleRightOutlinedIcon />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
                        <Box display="flex" alignItems="center">
                            <Avatar alt="no" src="https://img.freepik.com/premium-vector/food-logo-design_139869-254.jpg" sx={{ marginRight: 1 }} />
                            <Typography>
                                Goals
                            </Typography>
                        </Box>
                        <ArrowCircleRightOutlinedIcon />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center">
                            <Avatar alt="no" src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-restaurant-catering-or-gastro-service-menu-logo-template-vector-picture-image_10312529.png" sx={{ marginRight: 1 }} />
                            <Typography>
                                Menus
                            </Typography>
                        </Box>
                        <ArrowCircleRightOutlinedIcon />
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default Wallet;
