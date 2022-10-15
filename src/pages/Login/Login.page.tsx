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
import Background from "../../containers/Background";
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
      <Box id="login" data-testid="login">
         <Background defaultBackground fullPage>
            <ThemeProvider theme={Theme}>
               <Box id="workspace" className="full-size-container">
                  {/** Header */}
                  <header id="header" className="header-full-page">
                     <Ribbon className={Styles.ribbon}>
                        <Logo />
                     </Ribbon>
                  </header>

                  {/** Login form */}
                  <section
                     id="content"
                     className="full-size-container"
                  ></section>

                  {/** Footer */}
                  <footer id="footer" className="footer-full-page">
                     <Ribbon
                        horizontalAlignment="right"
                        className={Styles.ribbon}
                     >
                        {/** Copyright */}
                        <Copyright />
                     </Ribbon>
                  </footer>
               </Box>
            </ThemeProvider>
         </Background>
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
