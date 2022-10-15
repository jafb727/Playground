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
import Background from "../../../containers/Background";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Copyright from "../../../components/Copyright";
import { Link } from "react-router-dom";
import Ribbon from "./../../../containers/Ribbon";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";

/** @import Hooks */
import { useFallbackRoutingStateAndEvents } from "./Routing.fallback.hooks";

/** @import Theme */
import Theme from "./../../../config/theme.config";

/** @import Styles */
import "./Routing.fallback.styles.scss";

/** @import Assets */
import Text from "./../../../assets/typography/Text.json";
import Moon from "./../../../assets/images/404/MoonAstronaut.png";

/* --------------------------------------------- */

/**
 * @function RoutingFallback
 * @description Main functional component
 * @returns {JSX} A React element
 */
const RoutingFallback = () => {
   /** Hooks */
   const { videoSource, videoRef, videoPoster } =
      useFallbackRoutingStateAndEvents();

   /* ----------------------- */

   return (
      <Box data-testid="routing-fallback">
         <Background fullPage>
            <Box className="frame-container">
               <ThemeProvider theme={Theme}>
                  {/** Space background */}
                  <video
                     autoPlay
                     loop
                     muted
                     ref={videoRef}
                     poster={videoPoster}
                     className="space-video-background fade"
                     data-testid="space-video-background"
                  >
                     <source src={videoSource} type="video/mp4" />
                     <Typography>{Text.videoErrorBrowserSupport}</Typography>
                  </video>

                  {/** Moon */}
                  <Box className="moon-object">
                     <img alt="Moon" src={Moon}></img>
                  </Box>

                  {/** Error message */}
                  <Box className="error-message" data-testid="error-message">
                     <Typography
                        color="primary"
                        gutterBottom
                        variant="h1_1"
                        className="error-header"
                     >
                        {Text["404"]}
                     </Typography>
                     <Typography
                        gutterBottom
                        variant="h4"
                        className="error-subtitle"
                     >
                        {Text["404Subtitle"]}
                     </Typography>
                     <Typography className="error-apology">
                        {Text["404Apologies"]}
                     </Typography>
                     <Link to="/">
                        <Button
                           variant="contained"
                           className="back-home-button"
                           data-testid="back-home-button"
                        >
                           <Typography>{Text.btnBackHome}</Typography>
                        </Button>
                     </Link>
                  </Box>

                  {/** Footer */}
                  <footer className="footer-full-page">
                     <Ribbon horizontalAlignment="right">
                        {/** Copyright */}
                        <Copyright className="copyright" />
                     </Ribbon>
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
