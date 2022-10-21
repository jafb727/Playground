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

/** @import Hooks */
import { useFormStateAndEvents } from "./Form.component.hooks";
import { useStyleProcessor } from "../../utils/hooks.utils";

/** @import Interfaces */
import { FormType } from "../../config/form.config";

/** @import Styles */
import Style from "./Form.styles.module.scss";

/* --------------------------------------------- */

/** @exports @interface Form properties */
export interface FormProps {
   className?: string;
   elementSize?: number;
   onSubmit?: Function;
   setup?: FormType;
   sizeInMobile?: number;
   sizeInTablet?: number;
   sizeInLaptop?: number;
   sizeInDesktop?: number;
   style?: object;
   type?: string;
}

/* --------------------------------------------- */

/**
 * @function Form
 * @description Main functional component
 * @returns {JSX} A react element
 */
const Form = (props: FormProps) => {
   /** @constant Properties */
   const {
      className,
      elementSize,
      sizeInMobile,
      sizeInTablet,
      sizeInLaptop,
      sizeInDesktop,
      style,
   } = props;

   /** @constant Hook call */
   const { formLogo } = useFormStateAndEvents(props);
   const { flexSize } = useStyleProcessor({
      elementSize,
      sizeInMobile,
      sizeInTablet,
      sizeInLaptop,
      sizeInDesktop,
   });

   /* ----------------------- */

   return (
      <Box
         sx={{ ...flexSize, ...style }}
         className={className}
         data-testid="form-component"
      >
         <Box className={Style.formHeader}>{formLogo}</Box>
      </Box>
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
