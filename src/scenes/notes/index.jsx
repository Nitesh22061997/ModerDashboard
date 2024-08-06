import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import "./index.css";
import { tokens } from '../../theme';

// Static Dummy data start

function createData(customer, order, account, statusby, profileImage) {
    return { customer, order, account, statusby, profileImage };
}

const rows = [
    createData('Warren Buffet', 73234159, 634, "delivered", 'https://randomuser.me/api/portraits/men/7.jpg'),
    createData('Elon Musk', 23745444, 950, "delivered", 'https://randomuser.me/api/portraits/men/2.jpg'),
    createData('Robert Downey', 26223235, 160, "cancelled", 'https://randomuser.me/api/portraits/men/5.jpg'),
    createData('Chris Evans', 30545643, 317, "pending", 'https://randomuser.me/api/portraits/men/3.jpg'),
    createData('Robert Emma', 35665656, 160, "delivered", 'https://randomuser.me/api/portraits/men/8.jpg'),
    createData('Chris Pratt', 83859402, 260, "delivered", 'https://randomuser.me/api/portraits/men/1.jpg'),
];

// Dummy data end

export default function BasicTable() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <TableContainer component={Paper} sx={{ backgroundColor: colors.primary[400] }}>
            <Typography fontSize="20px" p="10px">
                Recent Orders
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ '& .MuiTableCell-root': { fontWeight: "bold" } }}>
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
                            <TableCell align="left" sx={{ display: "flex", alignItems: "center" }}>
                                <Avatar alt={row.customer} src={row.profileImage} sx={{ marginRight: 2 }} />
                                {row.customer}
                            </TableCell>
                            <TableCell align="left">{row.order}</TableCell>
                            <TableCell align="left">$ {row.account}</TableCell>
                            <TableCell align="left">
                                <button
                                    className={`btn ${row.statusby === 'delivered' ? 'btn-success' : 'btn-danger'}`}
                                >
                                    {row.statusby}
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
