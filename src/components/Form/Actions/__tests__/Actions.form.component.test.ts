/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Actions.form.component.test
 * @description: Actions form component test cases
 */

/* --------------------------------------------- */

/** Libraries */
import { screen } from "@testing-library/react";

/** Components */
import Component from "../Actions.form.component";

/** Utilities */
import { basicSetup } from "../../../../test/setupTests";

/* --------------------------------------------- */

describe("Actions.form.component", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("form-actions")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
