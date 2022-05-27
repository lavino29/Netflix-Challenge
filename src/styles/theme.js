import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary: {
            main: "#222730",
            textoPrimario: '#ffffff'
        },
        other: {
            main: "#002884"
        }
    },
    typography: {
        fontFamily: [
            "Open Sans",
            "sans-serif"
        ].join(','),
      }
})