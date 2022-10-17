/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Background.component.test
 * @description: Background component test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "..";

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
