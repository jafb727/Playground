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

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/** @import Utilities */
import { setTextField } from "./Text.component.utils";

/* --------------------------------------------- */

/**
 * @function Text
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Text = (props: FieldProps) => {
   return <Box data-testid="text-component">{setTextField(props)}</Box>;
};

/* --------------------------------------------- */

/** @static Component fields */
Text.fields = {
   componentName: "text",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Text;
