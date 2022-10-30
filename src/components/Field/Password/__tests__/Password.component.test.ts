/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Password.component.test
 * @description: Password component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "../Password.component";

/** Utilities */
import { basicSetup } from "../../../../test/setupTests";

/* --------------------------------------------- */

describe("Password.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("password-component")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
