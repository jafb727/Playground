/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Ribbon.container.utils
 * @description: Ribbon container utilities
 */

/* --------------------------------------------- */

/**
 * @exports @function calcHorizontalAlignInRibbon
 * @description Determines ribbon container aligment
 * @returns {object} an object to set on sx ribbon MUI container property
 */
export const calcHorizontalAlignInRibbon = (alignment = "left") => {
   /** @constant */
   const calculatedAlignment: any = {};

   if (alignment === "center") {
      calculatedAlignment.justifyContent = "center";
   }

   if (alignment === "left") {
      calculatedAlignment.justifyContent = "flex-start";
   }

   if (alignment === "right") {
      calculatedAlignment.justifyContent = "flex-end";
   }

   return calculatedAlignment;
};
