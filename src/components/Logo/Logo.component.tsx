/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Copyright.component
 * @description: Copyright component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/** @import Interfaces */
import { FormLogo } from "../../config/form.config";

/** @import Styles */
import Style from "./Logo.module.scss";

/* --------------------------------------------- */

/** @exports @interface Logo properties */
export interface LogoProps {
   setup?: FormLogo | undefined;
}

/* --------------------------------------------- */

/**
 * @function Logo
 * @description Main functional component
 * @returns {JSX} A react element
 */
function Logo(props: LogoProps) {
   return (
      <Box data-testid="logo">
         <Typography variant="h4" className={Style.logo}>
            MY
         </Typography>
      </Box>
   );
}

/* --------------------------------------------- */

/** @static Component fields */
Logo.fields = {
   componentName: "logo",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Logo;
