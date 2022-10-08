/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Form.component.test
 * @description: Form component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "../Form.component";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Form.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("form-component")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
