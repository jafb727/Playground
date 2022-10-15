/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Collection.container.test
 * @description: Collection container test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "..";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Collection.container", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("collection")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
