/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.container.utils
 * @description: Background container utilities
 */

/* --------------------------------------------- */

/** @import Styles */
import Style from "./../../assets/style/Styles.module.scss";

/* --------------------------------------------- */

/**
 * @exports @function setDefaultBackground
 * @description Sets default background from global module styles for full size pages
 * @returns {string}
 */
export const setDefaultBackground = (fullPage = true) => {
   /** @constant */
   let defaultBackgroundClassName: string = "";

   if (fullPage) {
      defaultBackgroundClassName = Style.defaultBackground;
   }

   return defaultBackgroundClassName;
};
