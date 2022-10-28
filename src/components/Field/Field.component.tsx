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
import TextField from "@mui/material/TextField";

/** @import Hooks */
import { useFieldStateAndEvents } from "./Field.component.hooks";

/** @import Interfaces */
import { FormField } from "../../config/interface.config";

/* --------------------------------------------- */

/** @exports @interface Field properties */
export interface FieldProps extends FormField {
   className?: string;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Field
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Field = (props: FieldProps) => {
   /** @constant Properties */
   const { className, style } = props;

   /** @constant Hook call */
   const { initializeFieldSetup } = useFieldStateAndEvents(props);

   /* ----------------------- */

   /** Form is shown in page mode (default) */
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
