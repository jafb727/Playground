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

/** @import Styles */
import Style from "./Copyright.module.scss";

/** @import Assets */
import Text from "./../../assets/typography/Text.json";

/* --------------------------------------------- */

/** @interface Copyright properties */
interface CopyrightProps {
   className?: string;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Copyright
 * @description Main functional component
 * @returns {JSX} A react element
 */
function Copyright(props: CopyrightProps) {
   /** @constant Properties */
   const { style: customStyle, className } = props;

   /* ----------------------- */

   return (
      <Box
         sx={customStyle}
         className={`${Style.copyrightContainer} ${className}`}
         data-testid="copyright-component"
      >
         <Typography variant="body2">&copy; {Text.copyright}</Typography>
      </Box>
   );
}

/* --------------------------------------------- */

/** @static Component fields */
Copyright.fields = {
   componentName: "copyright",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Copyright;
