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
import Logo from "./../../components/Logo";
import Ribbon from "./../../containers/Ribbon";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

/** @import Theme */
import Theme from "./../../config/theme.config";

/** @import Styles */
import Styles from "./Login.styles.module.scss";

/* --------------------------------------------- */

/**
 * @function Login
 * @description Main functional component
 * @returns {JSX} A React element
 */
const Login = () => {
   return (
      <Box className="full-page-background">
         <Box id="login-page" data-testid="login-page">
            <ThemeProvider theme={Theme}>
               {/** Header */}
               <header className="header-full-page">
                  <Ribbon className={Styles.ribbon}>
                     <Logo />
                  </Ribbon>
               </header>

               {/** Login form */}

               {/** Footer */}
               <footer className="footer-full-page">
                  <Ribbon horizontalAlignment="right" className={Styles.ribbon}>
                     {/** Copyright */}
                     <Copyright />
                  </Ribbon>
               </footer>
            </ThemeProvider>
         </Box>
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
