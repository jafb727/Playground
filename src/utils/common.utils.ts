/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: common.utils
 * @description: Common utilities
 */

/* --------------------------------------------- */

/** @import Hooks */
import { FlexItemProps } from "./hooks.utils";

/** @import Styles */
import GlobalVariables from "./../assets/style/abstracts/_variables.module.scss";

/* --------------------------------------------- */

/**
 * @exports @function turnFlexSizeToStyle
 * @description Helps to convert a flexSize defined property,
 * into a object that MUI "sx" property would accept
 * @param {number} flexSize - a flexbox unit in format number
 * @returns {object}
 */
export const turnFlexSizeToStyle = (flexSize?: number) => {
   if (flexSize === undefined) {
      return { flex: 1 };
   }

   return { flex: flexSize };
};

/* --------------------------------------------- */

/**
 * @exports @function setElementSizeInUA
 * @description Helps to set an element flexSize defined property, according to
 * its User Agent configuration to support responsive layout
 * @param {object} props - FlexItemProps
 * @returns {object}
 */
export const setElementSizeInUA = (props: FlexItemProps) => {
   /** @constant Properties */
   const { innerWidth } = window;
   const {
      elementSize,
      sizeInMobile,
      sizeInTablet,
      sizeInLaptop,
      sizeInDesktop,
   } = props;

   /** When element mobile size setup is on */
   if (
      sizeInMobile !== undefined &&
      innerWidth <= parseInt(GlobalVariables.breakpointMobile)
   ) {
      return turnFlexSizeToStyle(sizeInMobile);
   }

   /** When element tablet size setup is on */
   if (
      sizeInTablet !== undefined &&
      innerWidth <= parseInt(GlobalVariables.breakpointTablet)
   ) {
      return turnFlexSizeToStyle(sizeInTablet);
   }

   /** When element laptop size setup is on */
   if (
      sizeInLaptop !== undefined &&
      innerWidth <= parseInt(GlobalVariables.breakpointLaptop)
   ) {
      return turnFlexSizeToStyle(sizeInLaptop);
   }

   /** When element desktop size setup is on */
   if (
      sizeInDesktop !== undefined &&
      innerWidth > parseInt(GlobalVariables.breakpointLaptop)
   ) {
      return turnFlexSizeToStyle(sizeInDesktop);
   }

   /** Element size in container by default if property is setup */
   return turnFlexSizeToStyle(elementSize);
};
