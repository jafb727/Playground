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

/* --------------------------------------------- */

/** @@exports @interface Background properties */
export interface BackgroundProps {
   children?: React.ReactNode;
   className?: string;
   defaultBackground?: boolean;
   elementSize?: number;
   fullPage?: boolean;
   sizeInMobile?: number;
   sizeInTablet?: number;
   sizeInLaptop?: number;
   sizeInDesktop?: number;
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
   const {
      children,
      className,
      elementSize,
      sizeInMobile,
      sizeInTablet,
      sizeInLaptop,
      sizeInDesktop,
      style,
   } = props;

   /** @constant Hooks call */
   const { defaultBg, fullPage } = useBackgroundStateAndEvents(props);
   const { flexSize } = useStyleProcessor({
      elementSize,
      sizeInMobile,
      sizeInTablet,
      sizeInLaptop,
      sizeInDesktop,
   });

   /* ----------------------- */

   return (
      <Box
         sx={{ ...flexSize, ...style }}
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
