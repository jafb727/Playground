/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Ribbon.container.hooks
 * @description: Ribbon container hooks
 */

/* --------------------------------------------- */

/** @import Interfaces */
import { RibbonProps } from "./Ribbon.container";

/** @import Utilities */
import { calcHorizontalAlignInRibbon } from "./Ribbon.container.utils";

/* --------------------------------------------- */

/**
 * @function useRibbonContainerStateAndEvents
 * @description Main container hook
 * @returns {object} Hook functions and state
 */
export const useRibbonContainerStateAndEvents = (props: RibbonProps) => {
   /** @constant */
   const ribbonAlignment: any = calcHorizontalAlignInRibbon(
      props.horizontalAlignment
   );

   /* ----------------------- */

   return {
      ribbonAlignment,
   };
};
