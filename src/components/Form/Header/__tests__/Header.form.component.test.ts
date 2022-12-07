/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Header.form.component.test
 * @description: Header form component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { act, screen } from "@testing-library/react";

/** Components */
import Component from "../Header.form.component";

/** Utilities */
import { basicSetup } from "../../../../test/setupTests";

/* --------------------------------------------- */

describe("Header.form.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);

      act(() => {
         expect(screen.getByTestId("form-header")).toBeInTheDocument();
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
