/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.component
 * @description: Background component. Used to represent an element with
 * a background or simply a background in full page mode.
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import { Box } from "@mui/material";

/** @import Hooks */
import { useBackgroundStateAndEvents } from "./Background.component.hooks";
import { useStyleProcessor } from "../../utils/hooks.utils";

/** @import Interfaces */
import { ResponsiveSize } from "../../config/interface.config";

/* --------------------------------------------- */

/** @@exports @interface Background properties */
export interface BackgroundProps extends ResponsiveSize {
   children?: React.ReactNode;
   className?: string;
   defaultBg?: boolean;
   fullPage?: boolean;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Background
 * @description Main functional component
 * @returns {React.ReactNode} A React element
 */
const Background = (props: BackgroundProps) => {
   /** @constant Properties */
   const { children, className, style } = props;

   /** @constant Hooks call */
   const { defaultBackground, fullPageBackground } =
      useBackgroundStateAndEvents(props);
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   return (
      <Box
         className={`${fullPageBackground} ${defaultBackground} ${className}`}
         data-testid="background"
         sx={{ ...flexSize, ...style }}
      >
         {children}
      </Box>
   );
};

/* --------------------------------------------- */

/** @exports @default component */
export default Background;
