import {createTheme} from "@material-ui/core";
import tinycolor from "tinycolor2";

const colorPrimary = "#1481e5";
const colorSecondary = "#1db6b1";
const colorError = "#FF0000";
const colorSuccess = "#20da24";

// how to write your own theme and rewrite your own class styles in MuiTypography
const IndexTheme = createTheme({
    overrides : {
        // overriding class MuiTypography-root and ...-body1 for paragraphs and other ...
        MuiTypography : {
            // root :{
            //     fontFamily : 'Shabnam'
            // }
            // ,
            body1 : {
                fontFamily : 'Iran Nastaliq'
            }
        }
    },
    // set colors for theme
    palette : {
        primary : {
            main :  colorPrimary,
            light : tinycolor(colorPrimary).lighten().toHexString(),
            dark :  tinycolor(colorPrimary).darken().toHexString()
        },
        secondary :{
            main : colorSecondary,
            light : tinycolor(colorSecondary).lighten().toHexString(),
            dark : tinycolor(colorSecondary).darken().toHexString(),
        },
        error : {
            main : colorError,
            light : tinycolor(colorError).lighten().toHexString(),
            dark : tinycolor(colorError).darken().toHexString(),
        },
        success : {
            main : colorSuccess,
            light : tinycolor(colorSuccess).lighten().toHexString(),
            dark : tinycolor(colorSuccess).darken().toHexString(),
        }
    }
});

export default IndexTheme;

