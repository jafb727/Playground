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
import { usePasswordStateAndEvents } from "./Password.component.hooks";
import { useFieldEvaluation } from "../../../utils/hooks/fieldEvaluation.hook";

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
   const {
      handleMouseDownPassword,
      onFieldChange,
      passwordValue,
      passwordVsby,
      handlePasswordVsby,
   } = usePasswordStateAndEvents({ ...props, evaluateField: evaluate });

   /* ----------------------- */

   return (
      <Box data-testid="password-component">
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
                  type={passwordVsby ? "text" : "password"}
                  value={passwordValue}
                  onChange={onFieldChange}
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
                  sx={{ flex: 1 }}
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
