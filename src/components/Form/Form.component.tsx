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
import Typography from "@mui/material/Typography";

/** @import Styles */
import "./Form.styles.scss";

/** @import Assets */
import Text from "../../assets/typography/Text.json";

/* --------------------------------------------- */

/** @interface Form properties */
interface FormProps {
   className?: string;
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
   const { className, style } = props;

   /* ----------------------- */

   return (
      <Box sx={style} className={className} data-testid="form-component"></Box>
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
