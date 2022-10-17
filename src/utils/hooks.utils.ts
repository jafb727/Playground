/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: hooks.utils
 * @description: Hooks utilities. Gathers all reusable hooks to
 */

/* --------------------------------------------- */

/** @import Utilities */
import { setElementSizeInUA } from "./../utils/common.utils";

/* --------------------------------------------- */

/** @exports @interface Flex item properties */
export interface FlexItemProps {
   elementSize?: number;
   sizeInMobile?: number;
   sizeInTablet?: number;
   sizeInLaptop?: number;
   sizeInDesktop?: number;
}

/* --------------------------------------------- */

/**
 * @function useStyleProcessor
 * @description Helps to setup, calculate, transform any style component properties
 * into a useful metadata ready to be used implemented in MUI components
 * @returns {object} Hook functions and state
 */
export const useStyleProcessor = (props: FlexItemProps) => {
   /** @constant Style properties */
   let flexSize: any = setElementSizeInUA(props);

   /* ----------------------- */

   return {
      flexSize,
   };
};
