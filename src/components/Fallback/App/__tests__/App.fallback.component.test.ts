/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.fallback.component.test
 * @description: App fallback component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { act, screen } from "@testing-library/react";

/** Components */
import Component from "../App.fallback.component";

/** Utilities */
import { basicSetup } from "../../../../test/setupTests";

/* --------------------------------------------- */

describe("App.fallback.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      const component = screen.getByTestId("app-fallback");

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
