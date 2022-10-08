/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: style.utils.test
 * @description: Style utilities test cases
 */

/* --------------------------------------------- */

/** @import Utilities */
import { getDeviceType, convertPixelToNumber } from "./../style.utils";

/* --------------------------------------------- */

describe("style.utils", () => {
   describe("getDeviceType", () => {
      test("Gets device based on UA", () => {
         expect(getDeviceType("ipad")).toBe("tablet");
      });
   });

   /* ----------------------- */

   describe("convertPixelToNumber", () => {
      test("Converts pixel value to number", () => {
         expect(convertPixelToNumber("40px")).toBe(40);
      });
   });
});
