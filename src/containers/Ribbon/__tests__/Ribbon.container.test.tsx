/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Ribbon.container.test
 * @description: Ribbon container test cases
 */

/* --------------------------------------------- */

/** Components */
import Component from "../../Ribbon";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Ribbon.container", () => {
   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
