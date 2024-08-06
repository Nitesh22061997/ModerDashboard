import { Box, Typography } from '@mui/material'
import React from 'react'
import BarChart from '../../components/BarChart'
import Header from '../../components/Header'

const Bar = () => {
    return (
        <Box ml="10px">
            <Header title="Bar Chart" subtitle="Welcome charts section" />
            <Typography>
                Activity
            </Typography>
            <Box height='75vh'>
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar