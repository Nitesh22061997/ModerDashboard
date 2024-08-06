import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
                border: 'none',
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const Leftbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

    if (isMediumScreen) {
        return null; // Don't render the sidebar on medium and smaller screens
    }

    return (
        <Box
            sx={{
                "& .ps-sidebar-container": {
                    background: `${colors.primary[400]} !important`,
                    border: `none !important`,
                },
                "& .ps-menu-icon": {
                    backgroundColor: "transparent !important",
                },
                "& .ps-menu-button": {
                    padding: "5px 35px 5px 20px !important",
                    border: 'none !important',
                },
                "& .ps-menu-button:hover": {
                    color: "#868dfb !important",
                    backgroundColor: "transparent !important",
                },
                "& .ps-menu-button.ps-active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed} style={{ height: "60rem", border: 'none' }}>
                <Menu display="flex">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                            border: 'none',
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    My Account
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Bar Chart"
                            to="/charts"
                            icon={<AssessmentOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Notes Saved"
                            to="/notes"
                            icon={<AssignmentTurnedInOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Transactions"
                            to="/wallet"
                            icon={<AccountBalanceWalletOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/shop"
                            icon={<LocalMallOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Box
                            mt="500px">
                            <Item
                                title="Log Out"
                                to="/logout"
                                icon={<ExitToAppIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </Box>
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default Leftbar;