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
   className?: string;
   onSubmit?: Function;
   setup?: FormType;
   style?: object;
   type?: string;
}

/* --------------------------------------------- */

/**
 * @function Form
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Form = (props: FormProps) => {
   /** @constant Properties */
   const { className, style } = props;

   /** @constant Hook call */
   const { formAlignment, formLogo, formSubTitle, formTitle } =
      useFormStateAndEvents(props);
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   return (
      <ErrorBoundary>
         <Box
            className={className}
            sx={{ ...flexSize, ...formAlignment, ...style }}
            data-testid="form-component"
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
Form.fields = {
   componentName: "form",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Form;
