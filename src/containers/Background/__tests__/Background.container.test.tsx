/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.container.test
 * @description: Background container test cases
 */

/* --------------------------------------------- */

/** Components */
import Component from "../../Background";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Background.container", () => {
   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
