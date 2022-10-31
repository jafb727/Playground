/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Info.component
 * @description: Info component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/** @import Utilities */
import { initializeFieldInfoSetup } from "./Info.component.utils";

/* --------------------------------------------- */

/**
 * @function Info
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Info = (props: FieldProps) => {
   /** @constant */
   const { info } = props;

   /* ----------------------- */

   return (
      <Box data-testid="info-component">{initializeFieldInfoSetup(info)}</Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Info.fields = {
   componentName: "info",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Info;
