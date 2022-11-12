/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: FormHeader.component
 * @description: Form header component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import ErrorBoundary from "../../ErrorBoundary";

/** @import Hooks */
import { useFormHeaderStateAndEvents } from "./FormHeader.hook";
import { useStyleProcessor } from "../../../utils/hooks/style.hook";

/** @import Interfaces */
import { FormSharedProps } from "../Form.component";
import {
   ComponentBasic,
   ResponsiveSize,
   FormMetadata,
} from "../../../config/interface.config";

/** @import Styles */
import Style from "./FormHeader.module.scss";

/* --------------------------------------------- */

/** @exports @interface FormHeader properties */
export interface FormHeaderProps
   extends ComponentBasic,
      ResponsiveSize,
      FormSharedProps {
   formMetadata?: FormMetadata;
}

/* --------------------------------------------- */

/**
 * @function FormHeader
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const FormHeader = (props: FormHeaderProps) => {
   /** @constant Properties */
   const { asModal, className, style } = props;

   /** @constant Hook call */
   const { formLogo, formSubTitle, formTitle } =
      useFormHeaderStateAndEvents(props);
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   /** Form is shown in modal mode */
   if (asModal) {
      return (
         <ErrorBoundary>
            <Box className={Style.formHeader}>{formTitle}</Box>
         </ErrorBoundary>
      );
   }

   /** Form is shown in page mode (default) */
   return (
      <ErrorBoundary>
         <Box
            className={className}
            data-testid="form-header"
            sx={{ ...flexSize, ...style }}
         >
            <Box className={Style.formHeader}>
               {formLogo}
               {formTitle}
               {formSubTitle}
            </Box>
         </Box>
      </ErrorBoundary>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
FormHeader.fields = {
   componentName: "form",
};

/* --------------------------------------------- */

/** @exports @default component */
export default FormHeader;
