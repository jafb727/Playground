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
import Form from "../../components/Form";
import Logo from "./../../components/Logo";
import Collection from "../../containers/Collection";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

/** @import Theme */
import Theme from "./../../config/theme.config";

/** @import Styles */
import GlobalStyle from "./../../assets/style/Styles.module.scss";
import Style from "./Login.styles.module.scss";

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
               <Box id="workspace" className={GlobalStyle.fullSizeContainer}>
                  {/** Header */}
                  <header id="header" className={GlobalStyle.headerFullPage}>
                     <Collection className={Style.collection}>
                        <Logo />
                     </Collection>
                  </header>

                  {/** Login form */}
                  <section
                     id="content"
                     className={GlobalStyle.fullSizeContainer}
                  >
                     <Collection className={Style.loginContentContainer}>
                        <Form></Form>
                        <Background
                           className={Style.loginBackground}
                        ></Background>
                     </Collection>
                  </section>

                  {/** Footer */}
                  <footer id="footer" className={GlobalStyle.footerFullPage}>
                     <Collection
                        horizontalAlignment="end"
                        className={Style.collection}
                     >
                        {/** Copyright */}
                        <Copyright />
                     </Collection>
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
