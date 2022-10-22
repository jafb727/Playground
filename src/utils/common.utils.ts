/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: common.utils
 * @description: Common utilities
 */

/* --------------------------------------------- */

/**
 * @exports @function setContainerAlignment
 * @description Determines container alignment
 * @returns {object} an object to set on sx MUI component property
 */
export const setContainerAlignment = (alignment = "left") => {
   if (alignment === "center") {
      return { justifyContent: "center" };
   }

   if (alignment === "left") {
      return { justifyContent: "flex-start" };
   }

   if (alignment === "right") {
      return { justifyContent: "flex-end" };
   }

   return {};
};

/* --------------------------------------------- */

/**
 * @function capitalizeFirstLetter
 * @description Sets first letter of a word, capital
 * @param {string} word - word to transform
 * @returns {string} a word with first letter capitalized
 */
export const capitalizeFirstLetter = (word: any | string) => {
   if (checkValue(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
   }

   return "";
};

/* --------------------------------------------- */

/**
 * @function checkValue
 * @description Checks if passed argument is null, undefined, 0 or ""
 * @param {any} value - value to check
 * @returns {any | null} value evaluated or null
 */
export const checkValue = (value: any) => {
   if (value) {
      return value;
   }

   return null;
};
