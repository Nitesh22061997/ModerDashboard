import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./index.css"
import { tokens } from '../../theme';
import { Typography, useTheme } from '@mui/material';


// Static Dummy data start

function createData(customer, order, account, statusby) {
    return { customer, order, account, statusby };
}

const rows = [
    createData('Warren Buffet', 73234159, 634, "delivered"),
    createData('Elon Musk', 23745444, 950, "delivered"),
    createData('Robert Downey', 26223235, 160, "cancelled"),
    createData('Chris evans', 30545643, 317, "pending"),
    createData('Robert Emma', 35665656, 160, "delivered"),
    createData('Chris patt', 83859402, 260, "delivered"),
];

// Dummy data end

export default function BasicTable() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <TableContainer component={Paper} sx={{ backgroundColor: colors.primary[400] }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead fontS>
                    <Typography fontSize="20px" p="10px">
                        Recent Order's
                    </Typography>
                    <TableRow>
                        <TableCell>Customer</TableCell>
                        <TableCell align="left">Order No.</TableCell>
                        <TableCell align="left">Account</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.customer}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{row.customer}</TableCell>
                            <TableCell align="left">{row.order}</TableCell>
                            <TableCell align="left">$ {row.account}</TableCell>
                            <TableCell align="left"> <button
                                className={`btn ${row.statusby === 'delivered' ? 'btn-success' : 'btn-danger'}`}
                            >
                                {row.statusby}
                            </button></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
