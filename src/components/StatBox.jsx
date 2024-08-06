import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 18px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography mt={1} fontSize="10px" variant="h5" sx={{ color: colors.greenAccent[100] }}>
                        {subtitle}
                    </Typography>

                </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" mt="15px">

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: colors.grey[100] }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h5"
                    fontSize="10px"
                    sx={{ color: colors.greenAccent[100] }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;