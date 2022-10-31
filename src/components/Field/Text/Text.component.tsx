/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Text.component
 * @description: Text component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import Info from "../Info";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/** @import */
import Style from "./Text.styles.module.scss";

/* --------------------------------------------- */

/**
 * @function Text
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Text = (props: FieldProps) => {
   /** @constant Properties */
   const { autoComplete, focus, id, label, placeholder, type, required } =
      props;

   /**
    * @constant inputProps
    * @description Only these properties can be passed in inputProps without
    * interrupting regular MUI textfield behavior. Also is very convient and
    * maintainable instead of having a React component with lots of parameters
    * inlined. (Try putting label prop in this map to check)
    */
   const inputProps = {
      autoComplete: autoComplete || "",
      autoFocus: focus || false,
      id,
      placeholder: placeholder || "",
      type: type || "text",
      variant: "outlined",
   };

   /* ----------------------- */

   return (
      <Box className={Style.inputContainer} data-testid="text-component">
         <FormControl margin="dense" required={required || false}>
            <InputLabel htmlFor={label}>{label}</InputLabel>
            <OutlinedInput inputProps={inputProps} label={label} />
            <Info {...props} />
         </FormControl>
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Text.fields = {
   componentName: "text",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Text;
