/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.component.utils
 * @description: Background component utilities
 */

/* --------------------------------------------- */

/** @import Styles */
import Style from "./../../assets/style/base/_styles.module.scss";

/* --------------------------------------------- */

/**
 * @exports @function setDefaultBackground
 * @description Sets default background referencing from global module styles
 * @param {boolean|undefined} defaultBackground - Is background will have default background
 * @returns {string}
 */
export const setDefaultBackground = (
   defaultBackground: boolean | undefined
) => {
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
 * @param {boolen|undefined} fullPage - Is background will be shown full page
 * @returns {string}
 */
export const setFullPageBackground = (fullPage: boolean | undefined) => {
   /** @constant */
   let fullPageBackgroundClassName: string = "";

   if (fullPage) {
      fullPageBackgroundClassName = Style.fullPageBackground;
   }

   return fullPageBackgroundClassName;
};
