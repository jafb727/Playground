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
 * @exports @function setTextFieldProperties
 * @description Helps to setup a text field
 * @param {FieldProps} props - Field properties setup in form.config file
 * @returns {React.ReactNode} an React node
 */
export const setTextFieldProperties = (props: FieldProps) => {
   /** @constant */
   const fieldProperties = {
      autoComplete: props.autoComplete || false,
      autoFocus: props.focus || false,
      error: true,
      id: props.id,
      placeholder: props.placeholder || "",
      required: props.required || false,
      type: props.type,
      variant: "outlined",
   };

   return (
      <TextField
         label={props.label}
         margin="dense"
         inputProps={fieldProperties}
      />
   );
};
