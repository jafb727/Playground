/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Login.page
 * @description: Login page
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import Copyright from "../../components/Copyright";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

/** @import Theme */
import Theme from "./../../config/theme.config";

/** @import Styles */
import "./Login.styles.scss";

/* --------------------------------------------- */

/**
 * @function Login
 * @description Main functional component
 * @returns {JSX} A React element
 */
const Login = () => {
   return (
      <Box data-testid="login-page">
         <ThemeProvider theme={Theme}>
            {/** Login form */}

            {/** Copyright */}
            <Copyright />
         </ThemeProvider>
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Login.fields = {
   componentName: "login",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Login;
