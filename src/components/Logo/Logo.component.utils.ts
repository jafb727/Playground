/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Logo.component.utils
 * @description: Logo component utilities
 */

/* --------------------------------------------- */

/** @import Utilities */
import { capitalizeFirstLetter, checkValue } from "../../utils/common.utils";

/* --------------------------------------------- */

/** @enum Logo sizes dictionary */
const LogoSize = {
   large: "256x256",
   medium: "128x128",
   small: "64x64",
   xlarge: "512x512",
   xsmall: "32x32",
};

/* --------------------------------------------- */

/**
 * @function setLogoName
 * @description Sets logo name based on size and color setup. Loads the asset
 * corresponding the logo images available in assets/images/logo folder
 * @param {any|string} size - logo size expected
 * @param {any|string} color - logo themed color (primary|secondary)
 * @returns {string} a string with asset path following next pattern: My[logoSize][logoColor].png
 */
export const setLogoName = (size: any | string, color: any | string) => {
   const logoColor = capitalizeFirstLetter(color);
   let logoSize = "";

   if (checkValue(size)) {
      logoSize = LogoSize[size as keyof typeof LogoSize];
   }

   return `My${logoSize}${logoColor}.png`;
};
