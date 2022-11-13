/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Content.form.component
 * @description: Form content component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import ErrorBoundary from "../../ErrorBoundary";

/** @import Hooks */
import { useFormContentStateAndEvents } from "./Content.form.hook";
import { useStyleProcessor } from "../../../utils/hooks/style.hook";

/** @import Interfaces */
import {
   ComponentBasic,
   FormMetadata,
   ResponsiveSize,
} from "../../../config/interface.config";

/** @import Styles */
import Style from "./Content.form.module.scss";

/* --------------------------------------------- */

/** @exports @interface FormFields properties */
export interface FormFieldsProps extends ComponentBasic, ResponsiveSize {
   formMetadata?: FormMetadata;
   children?: React.ReactNode;
}

/* --------------------------------------------- */

/**
 * @function FormContent
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const FormContent = (props: FormFieldsProps) => {
   /** @constant Properties */
   const { children, className, style } = props;

   /** @constant Hook call */
   const { formFields } = useFormContentStateAndEvents(props);
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   /** Form is shown in page mode (default) */
   return (
      <ErrorBoundary>
         <Box
            className={className}
            data-testid="form-content"
            sx={{ ...flexSize, ...style }}
         >
            <Box className={Style.formBody}>
               {formFields}
               {children}
            </Box>
         </Box>
      </ErrorBoundary>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
FormContent.fields = {
   componentName: "form-content",
};

/* --------------------------------------------- */

/** @exports @default component */
export default FormContent;
