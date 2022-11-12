/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Password.component
 * @description: Password component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import Collection from "../../../containers/Collection";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import Info from "../Info";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

/** @import Hooks */
import { useFieldEvaluation } from "../../../utils/hooks/field/evaluation.hook";
import { useFieldStateAndEvents } from "../../../utils/hooks/field/field.hook";
import { usePasswordStateAndEvents } from "./Password.hook";

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/* --------------------------------------------- */

/**
 * @function Password
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Password = (props: FieldProps) => {
   /** @constant */
   const { label, required } = props;

   /** @constant Hook call */
   const { errorSetup, evaluate } = useFieldEvaluation();
   const { onFieldChange, fieldValue } = useFieldStateAndEvents({
      ...props,
      evaluateField: evaluate,
   });
   const { handleMouseDownPassword, passwordVsby, handlePasswordVsby } =
      usePasswordStateAndEvents(props);

   /* ----------------------- */

   return (
      <Box data-testid="password">
         <FormControl
            error={errorSetup.isThereAnError}
            margin="dense"
            required={required}
         >
            <Collection>
               <InputLabel htmlFor="outlined-adornment-password">
                  {label}
               </InputLabel>
               <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onClick={handlePasswordVsby}
                           onMouseDown={handleMouseDownPassword}
                           edge="end"
                        >
                           {passwordVsby ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                     </InputAdornment>
                  }
                  label={label}
                  onChange={onFieldChange}
                  sx={{ flex: 1 }}
                  type={passwordVsby ? "text" : "password"}
                  value={fieldValue}
               />
               <Info {...props} />
            </Collection>
            <FormHelperText>{errorSetup.message}</FormHelperText>
         </FormControl>
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Password.fields = {
   componentName: "password",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Password;
