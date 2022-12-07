/*
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Dialog.component.test
 * @description: Dialog component test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { act, screen } from "@testing-library/react";

/** @import Components */
import Component from "../Dialog.component";

/** @import Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Dialog.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      const component = screen.getByTestId("dialog");

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
