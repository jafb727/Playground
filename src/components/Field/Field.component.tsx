/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Field.component
 * @description: Field component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import ErrorBoundary from "../ErrorBoundary";

/** @import Interfaces */
import {
   ComponentBasic,
   FormField,
   ResponsiveSize,
} from "../../config/interface.config";

/** @import Utilities */
import { initializeFieldSetup } from "./Field.component.utils";

/* --------------------------------------------- */

/** @exports @interface Field properties */
export interface FieldProps extends ComponentBasic, FormField, ResponsiveSize {}

/* --------------------------------------------- */

/**
 * @function Field
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Field = (props: FieldProps) => {
   /** @constant Properties */
   const { className = "", style } = props;

   /* ----------------------- */

   return (
      <ErrorBoundary>
         <Box className={className} data-testid="field-component" sx={style}>
            {initializeFieldSetup(props)}
         </Box>
      </ErrorBoundary>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Field.fields = {
   componentName: "field",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Field;
