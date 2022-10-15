/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.fallback.component.test
 * @description: App fallback component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "../App.fallback.component";

/** Utilities */
import { basicSetup } from "../../../../test/setupTests";

/* --------------------------------------------- */

describe("App.fallback.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("app-fallback")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});