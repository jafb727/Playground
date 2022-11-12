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
import FormHeader from "./FormHeader";

/** @import Hooks */
import { useFormStateAndEvents } from "./Form.hook";
import { useStyleProcessor } from "../../utils/hooks/style.hook";

/** @import Interfaces */
import {
   ComponentBasic,
   FormType,
   ResponsiveSize,
} from "../../config/interface.config";

/** @import Styles */
import Style from "./Form.module.scss";

/* --------------------------------------------- */

/** @export @interface FormShared properties */
export interface FormSharedProps {
   alignment?: string;
   asModal?: boolean;
}

/** @exports @interface Form properties */
export interface FormProps
   extends ComponentBasic,
      ResponsiveSize,
      FormSharedProps {
   onSubmit?: Function;
   setup: FormType;
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
   const { asModal, alignment, className, style } = props;

   /** @constant Hook call */
   const { formAlignment, formFields, formMetadata } =
      useFormStateAndEvents(props);
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   /** Form is shown in modal mode */
   if (asModal) {
      return (
         <ErrorBoundary>
            <Dialog
               open={asModal}
               title={
                  <FormHeader
                     formMetadata={formMetadata}
                     asModal={asModal}
                     alignment={alignment}
                  />
               }
               content={formFields}
            />
         </ErrorBoundary>
      );
   }

   /** Form is shown in page mode (default) */
   return (
      <ErrorBoundary>
         <Box
            className={className}
            data-testid="form"
            sx={{ ...flexSize, ...formAlignment, ...style }}
         >
            <FormHeader
               formMetadata={formMetadata}
               asModal={asModal}
               alignment={alignment}
            />
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
