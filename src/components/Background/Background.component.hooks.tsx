/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.component.hooks
 * @description: Background component hooks.
 */

/* --------------------------------------------- */

/** @import Interfaces */
import { BackgroundProps } from "./Background.component";

/** @import Utilities */
import {
   setDefaultBackground,
   setFullPageBackground,
} from "./Background.component.utils";

/* --------------------------------------------- */

/**
 * @function useBackgroundStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useBackgroundStateAndEvents = (props: BackgroundProps) => {
   /** @constant Properties */
   const { defaultBg, fullPage } = props;
   const defaultBackground: string = setDefaultBackground(defaultBg);
   const fullPageBackground: string = setFullPageBackground(fullPage);

   /* ----------------------- */

   return {
      defaultBackground,
      fullPageBackground,
   };
};
