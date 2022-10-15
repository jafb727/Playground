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
import {
   setDefaultBackground,
   setFullPageBackground,
} from "./Background.container.utils";

/* --------------------------------------------- */

/**
 * @function useBackgroundStateAndEvents
 * @description Main container hook
 * @returns {object} Hook functions and state
 */
export const useBackgroundStateAndEvents = (props: BackgroundProps) => {
   /** @constant */
   const defaultBg: string = setDefaultBackground(props.defaultBackground);
   const fullPage: string = setFullPageBackground(props.fullPage);

   /* ----------------------- */

   return {
      defaultBg,
      fullPage,
   };
};
