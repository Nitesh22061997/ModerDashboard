import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40", content = "", heading = "" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        color: theme.palette.text.primary,
                        textAlign: "center",
                        fontSize: "18px",
                        marginBottom: "2px",
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        color: theme.palette.text.primary,
                        textAlign: "center",
                        fontSize: "8px",
                    }}
                >
                    {content}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProgressCircle;
