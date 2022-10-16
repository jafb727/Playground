/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.container
 * @description: Background container. Used to represent an element with
 * a background or simply a background in full page mode.
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import { Box } from "@mui/material";

/** @import Hooks */
import { useBackgroundStateAndEvents } from "./Background.container.hooks";

/* --------------------------------------------- */

/** @@exports @interface Background properties */
export interface BackgroundProps {
   children?: React.ReactNode;
   className?: string;
   defaultBackground?: boolean;
   fullPage?: boolean;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Background
 * @description Main functional component
 * @returns {JSX} A React element
 */
const Background = (props: BackgroundProps) => {
   /** @constant Properties */
   const { children, className, style } = props;

   /** @constant Hooks call */
   const { defaultBg, fullPage } = useBackgroundStateAndEvents(props);

   /* ----------------------- */

   return (
      <Box
         sx={style}
         className={`${fullPage} ${defaultBg} ${className}`}
         data-testid="background"
      >
         {children}
      </Box>
   );
};

/* --------------------------------------------- */

/** @exports @default component */
export default Background;
