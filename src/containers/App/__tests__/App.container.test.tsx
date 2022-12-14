/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.container.test
 * @description: App container test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { act } from "@testing-library/react";

/** Components */
import Component from "./../../App";

/** Utilities */
import { basicSetup } from "./../../../test/setupTests";

/* --------------------------------------------- */

describe("App.container", () => {
   test("Passes shallow snapshot test", async () => {
      const component = basicSetup(Component);

      await act(() => {
         expect(component).not.toBeNull();
      });
   });
});
