/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Text.component.utils
 * @description: Text component utilities
 */

/* --------------------------------------------- */

/** @import Components */
import TextField from "@mui/material/TextField";

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/* --------------------------------------------- */

/**
 * @exports @function setTextField
 * @description Helps to setup a text field
 * @param {FieldProps} props - Field properties setup in form.config file
 * @returns {React.ReactNode} an React node
 */
export const setTextField = (props: FieldProps) => {
   /**
    * @constant inputProps
    * @description Only these properties can be passed in inputProps without
    * interrupting regular MUI textfield behavior. Also is very convient and
    * maintainable instead of having a React component with lots of parameters
    * inlined. (Try putting label prop in this map to check)
    */
   const inputProps = {
      autoComplete: props?.autoComplete || false,
      autoFocus: props?.focus || false,
      id: props?.id,
      placeholder: props?.placeholder || "",
      type: props?.type || "text",
      variant: "outlined",
   };

   return (
      <TextField
         inputProps={inputProps}
         label={props?.label}
         margin="dense"
         required={props?.required || false}
      />
   );
};
