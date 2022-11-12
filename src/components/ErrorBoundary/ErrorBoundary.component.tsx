/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: ErrorBoundary.component
 * @description: ErrorBoundary component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React, { ErrorInfo, ReactNode } from "react";

/** @import Components */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/** @import Assets */
import Text from "./../../assets/typography/Text.json";

/* --------------------------------------------- */

/**
 * @interface Props
 * @description Error boundary properties
 */
interface Props {
   children?: ReactNode;
}

/**
 * @interface State
 * @description State properties
 */
interface State {
   hasError: boolean;
}

/* --------------------------------------------- */

/**
 * @function ErrorBoundary
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
class ErrorBoundary extends React.Component<Props, State> {
   /** @constant Properties */
   static Fields = {
      componentName: "error-boundary",
   };

   /** State */
   public state: State = {
      hasError: false,
   };

   /* ----------------------- */

   /**
    * @function componentDidCatch
    * @description Lifecycle method used catch any UI error at rendering
    * @param {Error} error - Generic error message
    * @param {ErrorInfo} errorInfo - Error details
    * @returns {boolean} A boolean
    */
   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error("Uncaught error:", error, errorInfo);
      this.setState({ hasError: true });
      return false;
   }

   /* ----------------------- */

   render() {
      if (this.state.hasError) {
         return (
            <Box data-testid="error-boundary-component">
               <Typography variant="body1">{Text.error}</Typography>
            </Box>
         );
      }

      return this.props.children;
   }
}

/* --------------------------------------------- */

/** @exports @default component */
export default ErrorBoundary;
