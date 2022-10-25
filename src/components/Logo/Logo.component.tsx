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
import ErrorBoundary from "../ErrorBoundary";

/** @import Hooks */
import { useLogoStateAndEvents } from "./Logo.component.hooks";

/** @import Interfaces */
import { FormLogo } from "../../config/interface.config";

/** @import Styles */
import Style from "./Logo.module.scss";

/* --------------------------------------------- */

/** @exports @interface Logo properties */
export interface LogoProps extends FormLogo {
   className?: string;
   options: FormLogo;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Logo
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Logo = (props: LogoProps) => {
   /** @constant Properties */
   const { className, style } = props;

   /** @constant Hooks call */
   const { altText, logoSource, logoAlignment } = useLogoStateAndEvents(props);

   /* ----------------------- */

   return (
      <ErrorBoundary>
         <Box
            className={`${Style.logoContainer} ${className} `}
            sx={{ ...logoAlignment, ...style }}
            data-testid="logo"
         >
            <Box className={Style.imageLogoContainer}>
               <img alt={altText} src={logoSource} />
            </Box>
         </Box>
      </ErrorBoundary>
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
