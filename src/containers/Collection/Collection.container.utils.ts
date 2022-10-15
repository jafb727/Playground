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
 * @returns {object} an object to set on sx collection MUI container property
 */
export const setCollectionAlignment = (alignment = "start") => {
   /** @constant */
   const _alignment: any = {};

   if (alignment === "center") {
      _alignment.justifyContent = "center";
   }

   if (alignment === "end") {
      _alignment.justifyContent = "flex-end";
   }

   if (alignment === "start") {
      _alignment.justifyContent = "flex-start";
   }

   return _alignment;
};
