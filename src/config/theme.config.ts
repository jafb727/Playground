/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: theme.config
 * @description: Material UI theme configuration
 */

/* --------------------------------------------- */

/** @import Utilities */
import { createTheme } from "@mui/material/styles";

/** @import Styles */
import Variables from "./../assets/style/abstracts/_variables.module.scss";

/* --------------------------------------------- */

/** @module Mui Typography variants */
declare module "@mui/material/styles" {
   /**
    * @interface TypographyVariants
    * @description Declares a new set of typography variants
    */
   interface TypographyVariants {
      h1_1: React.CSSProperties;
   }

   /**
    * @interface TypographyVariantsOptions
    * @description Allows configuration using createTheme
    */
   interface TypographyVariantsOptions {
      h1_1?: React.CSSProperties;
   }
}

/** @module Mui Typography override */
declare module "@mui/material/Typography" {
   /**
    * @interface TypographyPropsVariantOverrides
    * @description Update the Typography's variant prop options
    */
   interface TypographyPropsVariantOverrides {
      h1_1: true;
   }
}

/* --------------------------------------------- */

/** @module Mui Breakpoints override */
declare module "@mui/material/styles" {
   interface BreakpointOverrides {
      xs: false;
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true;
      tablet: true;
      laptop: true;
      desktop: true;
      tv: true;
   }
}

/* --------------------------------------------- */

/**
 * @constant @name Theme
 * @description Material UI theme configuration
 */
const Theme = createTheme({
   palette: {
      primary: {
         light: Variables.primaryLight,
         main: Variables.primaryMain,
         dark: Variables.primaryDark,
         contrastText: Variables.primaryContrastText,
      },
      secondary: {
         light: Variables.secondaryLight,
         main: Variables.secondaryMain,
         dark: Variables.secondaryDark,
         contrastText: Variables.secondaryContrastText,
      },
   },
   breakpoints: {
      values: {
         mobile: parseInt(Variables.breakpointMobile),
         tablet: parseInt(Variables.breakpointTablet),
         laptop: parseInt(Variables.breakpointLaptop),
         desktop: parseInt(Variables.breakpointDesktop),
         tv: parseInt(Variables.breakpointTV),
      },
   },
   typography: {
      fontFamily: Variables.globalFont,
      h1: {
         fontFamily: Variables.headerFont,
      },
      /** Created for big texts like Routing fallback 404 error */
      h1_1: {
         fontSize: 100,
         fontFamily: Variables.headerFont,
      },
      h2: {
         fontFamily: Variables.headerFont,
      },
      h3: {
         fontFamily: Variables.headerFont,
      },
      h4: {
         fontFamily: Variables.headerFont,
      },
      h5: {
         fontFamily: Variables.headerFont,
      },
      h6: {
         fontFamily: Variables.headerFont,
      },
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               /** MUI renders button value in capitals by default; tweak to not do so */
               textTransform: "initial",
            },
         },
      },
      MuiPaper: {
         styleOverrides: {
            root: {
               /** Used to fix border-radius desappearing */
               overflow: "hidden",
            },
         },
      },
      MuiFormControl: {
         styleOverrides: {
            root: {
               /** To make input size the longest input in a form */
               width: "100%",
            },
         },
      },
      MuiOutlinedInput: {
         styleOverrides: {
            notchedOutline: {
               borderColor: Variables.InputBorderColorNotActive,
            },
            root: {
               "&:hover": {
                  "& .MuiOutlinedInput-notchedOutline": {
                     borderColor: Variables.InputBorderColorHover,
                  },
               },
            },
         },
      },
   },
});

/* --------------------------------------------- */

/** @exports @default theme */
export default Theme;
