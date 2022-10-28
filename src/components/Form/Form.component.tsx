/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Form.component
 * @description: Form component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import Dialog from "../Dialog";
import ErrorBoundary from "../ErrorBoundary";

/** @import Hooks */
import { useFormStateAndEvents } from "./Form.component.hooks";
import { useStyleProcessor } from "../../utils/hooks.utils";

/** @import Interfaces */
import { FormType, ResponsiveSize } from "../../config/interface.config";

/** @import Styles */
import Style from "./Form.styles.module.scss";

/* --------------------------------------------- */

/** @exports @interface Form properties */
export interface FormProps extends ResponsiveSize {
   alignment?: string;
   asModal?: boolean;
   className?: string;
   onSubmit?: Function;
   setup: FormType;
   style?: object;
   type: string;
}

/* --------------------------------------------- */

/**
 * @function Form
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Form = (props: FormProps) => {
   /** @constant Properties */
   const { asModal, className, style } = props;

   /** @constant Hook call */
   const { formAlignment, formFields, formLogo, formSubTitle, formTitle } =
      useFormStateAndEvents(props);
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   /** Form is shown in modal mode */
   if (asModal) {
      return (
         <ErrorBoundary>
            <Dialog open={asModal} title={formTitle} />
         </ErrorBoundary>
      );
   }

   /** Form is shown in page mode (default) */
   return (
      <ErrorBoundary>
         <Box
            className={className}
            component="form"
            data-testid="form-component"
            sx={{ ...flexSize, ...formAlignment, ...style }}
         >
            <Box className={Style.formHeader}>
               {formLogo}
               {formTitle}
               {formSubTitle}
            </Box>
            <Box className={Style.formBody}>{formFields}</Box>
            <Box className={Style.formFooter}></Box>
         </Box>
      </ErrorBoundary>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Form.fields = {
   componentName: "form",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Form;
