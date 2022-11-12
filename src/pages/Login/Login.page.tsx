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
import Style from "./Login.module.scss";

/* --------------------------------------------- */

/**
 * @function Login
 * @description Main functional component
 * @returns {React.ReactNode} A React element
 */
const Login = () => {
   /** @constant */
   const {
      footerInFullPage,
      fullSizeCentered,
      fullSizeElement,
      headerInFullPage,
   } = GlobalStyle;
   const { collection, loginBackground, loginContent } = Style;

   /* ----------------------- */

   return (
      <Box data-testid="login" id="login">
         <Background defaultBg fullPage>
            <ThemeProvider theme={Theme}>
               <Box className={fullSizeCentered} id="workspace">
                  {/** Header */}
                  <header className={headerInFullPage} id="header">
                     <Collection className={collection}></Collection>
                  </header>

                  {/** Login form */}
                  <section className={fullSizeCentered} id="content">
                     <Paper elevation={12} className={loginContent}>
                        <Collection className={fullSizeElement}>
                           <Form
                              alignment="center"
                              className={fullSizeCentered}
                              setup={LogInFormSetup}
                              elementSize={1}
                              type="new"
                           />
                           <Background
                              className={`${loginBackground} ${fullSizeElement}`}
                              sizeInMobile={0}
                              sizeInTablet={0}
                              sizeInLaptop={0}
                              sizeInDesktop={1}
                           />
                        </Collection>
                     </Paper>
                  </section>

                  {/** Footer */}
                  <footer className={footerInFullPage} id="footer">
                     <Collection alignment="right" className={collection}>
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
