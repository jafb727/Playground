/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Routing.fallback.component
 * @description: Routing fallback component. Whenever a route is not recognized
 * or built wrong this is the error page to show by default
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Background from "../../Background";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collection from "../../../containers/Collection";
import Copyright from "../../../components/Copyright";
import { Link } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";

/** @import Hooks */
import { useRoutingFallbackStateAndEvents } from "./Routing.fallback.hook";

/** @import Theme */
import Theme from "./../../../config/theme.config";

/** @import Styles */
import GlobalStyle from "./../../../assets/style/base/_styles.module.scss";
import Style from "./Routing.fallback.module.scss";

/** @import Assets */
import Text from "./../../../assets/typography/Text.json";
import Moon from "./../../../assets/images/404/MoonAstronaut.png";

/* --------------------------------------------- */

/**
 * @function RoutingFallback
 * @description Main functional component
 * @returns {React.ReactNode} A React element
 */
const RoutingFallback = () => {
   /** @constant Hooks call */
   const { videoSource, videoRef, videoPoster } =
      useRoutingFallbackStateAndEvents();

   /* ----------------------- */

   return (
      <Box data-testid="routing-fallback">
         <Background defaultBg fullPage>
            <Box className={GlobalStyle.frameContainer}>
               <ThemeProvider theme={Theme}>
                  {/** Space background */}
                  <video
                     autoPlay
                     className={`${Style.spaceVideoBackground} ${GlobalStyle.fade}`}
                     data-testid="space-video-background"
                     loop
                     muted
                     poster={videoPoster}
                     ref={videoRef}
                  >
                     <source src={videoSource} type="video/mp4" />
                     <Typography>{Text.videoErrorBrowserSupport}</Typography>
                  </video>

                  {/** Moon */}
                  <Box className={Style.moonObject}>
                     <img alt="Moon" src={Moon}></img>
                  </Box>

                  {/** Error message */}
                  <Box
                     className={Style.errorMessage}
                     data-testid="error-message"
                  >
                     <Typography
                        className={Style.errorHeader}
                        color="primary"
                        gutterBottom
                        variant="h1_1"
                     >
                        {Text["404"]}
                     </Typography>
                     <Typography
                        className={Style.errorSubtitle}
                        gutterBottom
                        variant="h4"
                     >
                        {Text["404Subtitle"]}
                     </Typography>
                     <Typography className={Style.errorApology}>
                        {Text["404Apologies"]}
                     </Typography>
                     <Link to="/">
                        <Button
                           className={Style.backHomeButton}
                           data-testid="back-home-button"
                           variant="contained"
                        >
                           <Typography>{Text.btnBackHome}</Typography>
                        </Button>
                     </Link>
                  </Box>

                  {/** Footer */}
                  <footer className={GlobalStyle.footerInFullPage}>
                     <Collection alignment="right">
                        {/** Copyright */}
                        <Copyright className={Style.copyright} />
                     </Collection>
                  </footer>
               </ThemeProvider>
            </Box>
         </Background>
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
RoutingFallback.fields = {
   componentName: "routing-fallback",
};

/* --------------------------------------------- */

/** @exports @default component */
export default RoutingFallback;
