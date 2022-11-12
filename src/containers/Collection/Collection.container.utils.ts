/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Collection.container.utils
 * @description: Collection container utilities
 */

/* --------------------------------------------- */

/**
 * @exports @function setCollectionAlignment
 * @description Determines collection container alignment
 * @returns {object} { justifyContent }
 */
export const setCollectionAlignment = (alignment = "left") => {
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
