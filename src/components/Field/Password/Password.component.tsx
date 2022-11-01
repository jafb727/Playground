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
import IconButton from "@mui/material/IconButton";
import Info from "../Info";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

/** @import Hooks */
import { usePasswordStateAndEvents } from "./Password.component.hooks";

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
   const {
      handleMouseDownPassword,
      setPasswordVsby,
      passwordSetup,
      updatePasswordFieldValue,
   } = usePasswordStateAndEvents();

   /* ----------------------- */

   return (
      <Box data-testid="password-component">
         <FormControl margin="dense" required={required}>
            <Collection>
               <InputLabel htmlFor="outlined-adornment-password">
                  {label}
               </InputLabel>
               <OutlinedInput
                  id="outlined-adornment-password"
                  type={passwordSetup.visibility ? "text" : "password"}
                  value={passwordSetup.value}
                  onChange={updatePasswordFieldValue("value")}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onClick={setPasswordVsby}
                           onMouseDown={handleMouseDownPassword}
                           edge="end"
                        >
                           {passwordSetup.visibility ? (
                              <VisibilityOff />
                           ) : (
                              <Visibility />
                           )}
                        </IconButton>
                     </InputAdornment>
                  }
                  label={label}
                  sx={{ flex: 12 }}
               />
               <Info {...props} style={{ flex: 1 }} />
            </Collection>
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
