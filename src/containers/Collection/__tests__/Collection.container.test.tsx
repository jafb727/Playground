/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Collection.container.test
 * @description: Collection container test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { act, screen } from "@testing-library/react";

/** Components */
import Component from "..";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Collection.container", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      const component = screen.getByTestId("collection");

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
