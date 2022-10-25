/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Button.component
 * @description: Button component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";

/** @import Styles */
import Style from "./Button.module.scss";

/* --------------------------------------------- */

/**
 * @function Button
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
function Button() {
   return (
      <Box data-testid="button">
         <button className={Style.myButton}>Click me!</button>
      </Box>
   );
}

/* --------------------------------------------- */

/** @static Component fields */
Button.fields = {
   componentName: "button",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Button;
