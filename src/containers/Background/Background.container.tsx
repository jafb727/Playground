/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.container
 * @description: Background container
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import { Box } from "@mui/material";

/** @import Hooks */
import { useBackgroundContainerStateAndEvents } from "./Background.container.hooks";

/* --------------------------------------------- */

/** @@exports interface Background properties */
export interface BackgroundProps {
   children?: React.ReactNode;
   className?: string;
   defaultBackground?: boolean;
   fullPage?: boolean;
}

/* --------------------------------------------- */

/**
 * @function Background
 * @description Main functional component
 * @returns {JSX} A React element
 */
const Background = (props: BackgroundProps) => {
   /** @constant Properties */
   const { children, className } = props;

   /** @constant Hooks call */
   const { defaultBackground, fullPageBackground } =
      useBackgroundContainerStateAndEvents(props);

   /* ----------------------- */

   return (
      <Box
         className={`${fullPageBackground} ${defaultBackground} ${className}`}
         data-testid="background"
      >
         {children}
      </Box>
   );
};

/* --------------------------------------------- */

/** @exports @default component */
export default Background;