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
import Background from "../../components/Background";
import Box from "@mui/material/Box";
import Collection from "../../containers/Collection";
import Copyright from "../../components/Copyright";
import Form from "../../components/Form";
import Paper from "@mui/material/Paper";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

/** @import Utilities */
import { LogIn as LogInFormSetup } from "../../config/form.config";

/** @import Theme */
import Theme from "./../../config/theme.config";

/** @import Styles */
import GlobalStyle from "./../../assets/style/base/_styles.module.scss";
import Style from "./Login.styles.module.scss";

/* --------------------------------------------- */

/**
 * @function Login
 * @description Main functional component
 * @returns {JSX} A React element
 */
const Login = () => {
   /** @constant */
   const { footerFullPage, fullSizeCentered, fullSizeElement, headerFullPage } =
      GlobalStyle;

   /* ----------------------- */

   return (
      <Box id="login" data-testid="login">
         <Background defaultBackground fullPage>
            <ThemeProvider theme={Theme}>
               <Box id="workspace" className={fullSizeCentered}>
                  {/** Header */}
                  <header id="header" className={headerFullPage}>
                     <Collection className={Style.collection}></Collection>
                  </header>

                  {/** Login form */}
                  <section id="content" className={fullSizeCentered}>
                     <Paper
                        elevation={12}
                        className={Style.loginContentContainer}
                     >
                        <Collection className={fullSizeElement}>
                           <Form
                              sizeInMobile={1}
                              sizeInTablet={1}
                              sizeInLaptop={1}
                              sizeInDesktop={1}
                              className={fullSizeCentered}
                              setup={LogInFormSetup}
                              type="new"
                           />
                           <Background
                              sizeInMobile={0}
                              sizeInTablet={0}
                              sizeInLaptop={0}
                              sizeInDesktop={1}
                              className={`${Style.loginBackground} ${fullSizeElement}`}
                           />
                        </Collection>
                     </Paper>
                  </section>

                  {/** Footer */}
                  <footer id="footer" className={footerFullPage}>
                     <Collection alignment="right" className={Style.collection}>
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
