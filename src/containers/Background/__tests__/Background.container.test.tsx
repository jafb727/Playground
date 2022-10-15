/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.container.test
 * @description: Background container test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "../../Background";

/** Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Background.container", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("background")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
