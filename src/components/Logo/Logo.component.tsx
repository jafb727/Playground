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

/** @import Hooks */
import { useLogoStateAndEvents } from "./Logo.component.hooks";

/** @import Interfaces */
import { FormLogo } from "../../config/interface.config";

/** @import Styles */
import Style from "./Logo.module.scss";

/* --------------------------------------------- */

/** @exports @interface Logo properties */
export interface LogoProps extends FormLogo {
   options: FormLogo;
}

/* --------------------------------------------- */

/**
 * @function Logo
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Logo = (props: LogoProps) => {
   /** @constant Hooks call */
   const { altText, logoSource, logoAlignment } = useLogoStateAndEvents(props);

   /* ----------------------- */

   return (
      <Box className={Style.logoContainer} data-testid="logo">
         <Box className={Style.imageLogoContainer} sx={logoAlignment}>
            <img alt={altText} src={logoSource} />
         </Box>
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Logo.fields = {
   componentName: "logo",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Logo;
