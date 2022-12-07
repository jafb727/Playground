/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Content.form.component.test
 * @description: Content form component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { act, screen } from "@testing-library/react";

/** Components */
import Component from "../Content.form.component";

/** Utilities */
import { basicSetup } from "../../../../test/setupTests";

/* --------------------------------------------- */

describe("Content.form.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);

      act(() => {
         expect(screen.getByTestId("form-content")).toBeInTheDocument();
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
