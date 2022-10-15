/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Ribbon.container.test
 * @description: Ribbon container test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "../../Ribbon";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Ribbon.container", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("ribbon")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
