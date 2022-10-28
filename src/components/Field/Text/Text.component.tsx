/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Text.component
 * @description: Text component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";

/** @import Hooks */
import { useTextStateAndEvents } from "./Text.component.hooks";

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/* --------------------------------------------- */

/**
 * @function Text
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Text = (props: FieldProps) => {
   /** @constant Hook call */
   const { initializeTextFieldSetup } = useTextStateAndEvents();

   /* ----------------------- */

   return (
      <Box data-testid="text-component">{initializeTextFieldSetup(props)}</Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Text.fields = {
   componentName: "text",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Text;
