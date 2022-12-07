/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Field.component.test
 * @description: Form component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { act, screen } from "@testing-library/react";

/** Components */
import Component from "../Field.component";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Field.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      const component = screen.getByTestId("field");

      act(() => {
         expect(component).toBeInTheDocument();
      });
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);

      act(() => {
         expect(component).toMatchSnapshot();
      });
   });
});
