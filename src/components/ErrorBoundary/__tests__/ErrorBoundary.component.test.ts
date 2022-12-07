/*
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: ErrorBoundary.component.test
 * @description: ErrorBoundary component test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { act } from "@testing-library/react";

/** @import Components */
import Component from "../ErrorBoundary.component";

/** @import Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("ErrorBoundary.component", () => {
   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);

      act(() => {
         expect(component).toMatchSnapshot();
      });
   });
});
