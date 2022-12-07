/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Text.component.test
 * @description: Text component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { act, screen } from "@testing-library/react";

/** Components */
import Component from "../Text.component";

/** Utilities */
import { basicSetup } from "../../../../test/setupTests";

/* --------------------------------------------- */

describe("Text.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      const component = screen.getByTestId("text");

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
