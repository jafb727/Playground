/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: style.utils
 * @description: Style utilities
 */

/* --------------------------------------------- */

/** @import Utilities */
import { Regexp } from "./regexp.utils";

/* --------------------------------------------- */

/** @enum Device dictionary */
export const Device = {
   tablet: "tablet",
   mobile: "mobile",
   latop: "laptop",
   desktop: "desktop",
};

/* --------------------------------------------- */

/**
 * @exports @function getDeviceType
 * @description Gets current user device type based o User Agent
 * @param {string} userAgent - Browser where app is being viewed
 * @returns {string} A string representing the device type
 */
export const getDeviceType = (userAgent?: string) => {
   const _userAgent: string = userAgent || navigator.userAgent;

   if (Regexp.tabletDevice.test(_userAgent)) {
      return Device.tablet;
   }

   if (Regexp.mobileDevice.test(_userAgent)) {
      return Device.mobile;
   }

   return Device.latop;
};

/* --------------------------------------------- */

/**
 * @exports @function convertPixelToNumber
 * @description Converts a pixel value into a number
 * @param {string} pixelValue - Pixel value as CSS implement it
 * @returns {number} A number representing pixel value
 */
export const convertPixelToNumber = (pixelValue: string) => {
   return parseInt(pixelValue.substring(0, pixelValue.length - 2));
};
