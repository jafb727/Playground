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
import { useStyleProcessor } from "../../utils/hooks.utils";

/** @import Styles */
import "./Form.styles.scss";

/* --------------------------------------------- */

/** @interface Form properties */
interface FormProps {
   className?: string;
   elementSize?: number;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Form
 * @description Main functional component
 * @returns {JSX} A react element
 */
const Form = (props: FormProps) => {
   /** @constant Properties */
   const { className, elementSize, style } = props;

   /** @constant Hook call */
   const { flexSize } = useStyleProcessor({ elementSize });

   /* ----------------------- */

   return (
      <Box
         sx={{ ...flexSize, ...style }}
         className={className}
         data-testid="form-component"
      ></Box>
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
