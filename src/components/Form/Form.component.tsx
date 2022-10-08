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

/**
 * @function Form
 * @description Main functional component
 * @returns {JSX} A react element
 */
const Form = () => {
   return <Box data-testid="form-component"></Box>;
};

/* --------------------------------------------- */

/** @static Component fields */
Form.fields = {
   componentName: "form",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Form;
