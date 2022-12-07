/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.component.test
 * @description: Background component test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { act, screen } from "@testing-library/react";

/** Components */
import Component from "..";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Background.container", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      const component = screen.getByTestId("background");

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
