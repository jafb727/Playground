/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Ribbon.container
 * @description: Ribbon container. Renders a queue of elements organized
 * from left to right using flexbox. Each element can have is own flex size
 * to fit inside the ribbon of elements.
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import { Box } from "@mui/material";

/** @import Hooks */
import { useRibbonContainerStateAndEvents } from "./Ribbon.container.hooks";

/** @import Styles */
import Style from "./Ribbon.module.scss";

/* --------------------------------------------- */

/** @exports @interface Ribbon properties */
export interface RibbonProps {
   children?: React.ReactNode;
   className?: string;
   horizontalAlignment?: string;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Ribbon
 * @description Main functional component
 * @returns {JSX} A React element
 */
const Ribbon = (props: RibbonProps) => {
   /** @constant Properties */
   const { children, className, style: customStyle } = props;

   /** @constant Hooks call */
   const { ribbonAlignment } = useRibbonContainerStateAndEvents(props);

   /* ----------------------- */

   return (
      <Box
         sx={{ ...ribbonAlignment, ...customStyle }}
         className={`${Style.ribbonContainer} ${className}`}
         data-testid="ribbon"
      >
         {children}
      </Box>
   );
};

/* --------------------------------------------- */

/** @exports @default component */
export default Ribbon;
