/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Login.page.test
 * @description: Login page test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { screen } from "@testing-library/react";

/** @import Components */
import Component from "../Login.page";

/** @import Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Login.page", () => {
   test("Renders component ok", () => {
      basicSetup(Component);
      expect(screen.getByTestId("login-page")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = basicSetup(Component);
      expect(component).toMatchSnapshot();
   });
});
