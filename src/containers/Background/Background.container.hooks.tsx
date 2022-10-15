/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.container.hooks
 * @description: Background container hooks
 */

/* --------------------------------------------- */

/** @import Interfaces */
import { BackgroundProps } from "./Background.container";

/** @import Utilities */
import { setDefaultBackground } from "./Background.container.utils";

/* --------------------------------------------- */

/**
 * @function useBackgroundContainerStateAndEvents
 * @description Main container hook
 * @returns {object} Hook functions and state
 */
export const useBackgroundContainerStateAndEvents = (
   props: BackgroundProps
) => {
   /** @constant */
   const defaultBackground: string = setDefaultBackground(props.fullPage);

   /* ----------------------- */

   return {
      defaultBackground,
   };
};
