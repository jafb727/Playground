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
import { ComponentBasic } from "../../config/interface.config";

/** @import Assets */
import Text from "./../../assets/typography/Text.json";

/* --------------------------------------------- */

/**
 * @function Copyright
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Copyright = (props: ComponentBasic) => {
   /** @constant Properties */
   const { className = "", style } = props;

   /* ----------------------- */

   return (
      <Box className={className} data-testid="copyright" sx={style}>
         <Typography variant="body2">&copy; {Text.copyright}</Typography>
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Copyright.fields = {
   componentName: "copyright",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Copyright;
