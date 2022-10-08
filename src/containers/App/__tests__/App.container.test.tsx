/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.container.test
 * @description: App container test cases
 */

/* --------------------------------------------- */

/** Components */
import Component from "./../../App";

/** Utilities */
import { basicSetup } from "./../../../test/setupTests";

/* --------------------------------------------- */

describe("App.container", () => {
   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
