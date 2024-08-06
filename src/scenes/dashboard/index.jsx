import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import BasicTable from "../notes";
import Shop from "../shop";
import Wallet from "../wallet";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px" >
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" />
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(20, 1fr)"
                gridAutoRows="120px"
                gap="10px"
            >
                {/* ROW 1 (4 BOX) */}

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="75"
                        subtitle="Total Orders"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <Avatar alt="Not found" src="https://static.vecteezy.com/system/resources/thumbnails/011/474/119/small_2x/shopping-king-logo-design-free-vector.jpg" />
                        }
                    />

                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="70"
                        subtitle="Total Delivered"
                        progress="0.50"
                        increase="+21%"

                        icon={
                            <Avatar alt="Not found" src="https://static.vecteezy.com/system/resources/previews/005/249/817/original/shopping-bag-with-leaf-go-green-nature-logo-icon-design-vector.jpg" />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="05"
                        subtitle="Total Cancelled"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <Avatar alt="Not found" src="https://img.freepik.com/premium-vector/simple-shopping-red-bag-logo_483832-376.jpg" />

                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >


                    <StatBox
                        title="$12k"
                        subtitle="Total Revenue"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <Avatar alt="Not found" src="https://e7.pngegg.com/pngimages/43/883/png-clipart-flat-design-revenue-banyan-miscellaneous-blue.png" />
                        }
                    />
                </Box>
                {/* ROW 1 STATBOX */}
                <Box
                    gridColumn="span 8"
                    gridAutoRows="120px"
                    backgroundColor={colors.primary[400]}
                    mx="15px"
                >
                    <Box
                        mt="11px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                fontSize="10px"
                                fontWeight="100"
                                color={colors.grey[100]}
                            >
                                Net Profit
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                fontSize="30px"
                                mt="10px"
                                color={colors.greenAccent[100]}
                            >
                                $59,342.32
                            </Typography>
                            <Typography
                                mt="10px"
                                fontSize="10px"
                            >2%</Typography>
                        </Box>
                        <Box>
                            <ProgressCircle progress="0.70" size="100" heading="70%" content="Goal Completed" />

                        </Box>
                    </Box>
                </Box>

                {/* ROW 2 STACK 1 */}
                <Box
                    gridColumn="span 12"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]} mt="15px"
                >
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>

                {/* ROW 2 STACK 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    mx="15px" mt="15px"
                >
                    <Box>
                        <Wallet />
                    </Box>
                </Box>

                {/* ROW 3 STACK 1 */}
                <Box
                    gridColumn="span 12"
                    gridRow="span 3"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    mt="12px"
                >
                    <Box >
                        <BasicTable />
                    </Box>
                </Box>

                {/* ROW 3 STACK 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 3"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    mx="15px" mt="15px" p="10px"
                >
                    <Box mt="-20px">
                        <Shop />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;