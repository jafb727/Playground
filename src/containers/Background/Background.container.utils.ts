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
 * @description Sets default background referencing from global module styles
 * @param {boolen} defaultBackground - is background will have default background
 * @returns {string}
 */
export const setDefaultBackground = (defaultBackground = true) => {
   /** @constant */
   let defaultBackgroundClassName: string = "";

   if (defaultBackground) {
      defaultBackgroundClassName = Style.defaultBackground;
   }

   return defaultBackgroundClassName;
};

/* --------------------------------------------- */

/**
 * @exports @function setFullPageBackground
 * @description Sets background at full size referencing from global module styles
 * @param {boolen} fullPage - is background will be shown full page
 * @returns {string}
 */
export const setFullPageBackground = (fullPage = true) => {
   /** @constant */
   let fullPageBackgroundClassName: string = "";

   if (fullPage) {
      fullPageBackgroundClassName = Style.fullPageBackground;
   }

   return fullPageBackgroundClassName;
};
