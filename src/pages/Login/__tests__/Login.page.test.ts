/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Login.page.test
 * @description: Login page test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { act, screen } from "@testing-library/react";

/** @import Components */
import Component from "../Login.page";

/** @import Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Login.page", () => {
   test("Renders component ok", async () => {
      basicSetup(Component);
      const component = screen.getByTestId("login");

      await act(() => {
         expect(component).toBeInTheDocument();
      });
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", async () => {
      const component = basicSetup(Component);

      await act(() => {
         expect(component).toMatchSnapshot();
      });
   });
});
