/*
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Logo.component.test
 * @description: Logo component test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { screen } from "@testing-library/react";

/** @import Components */
import Component from "../Logo.component";

/** @import Utilities */
import { basicSetup } from "../../../test/setupTests";

/* --------------------------------------------- */

describe("Logo.component", () => {
   /** @constant Properties */
   const props = {
      options: {
         altText: "Login form logo",
         alignment: "center",
         size: "small",
         color: "primary",
      },
   };

   test("Renders component ok", async () => {
      basicSetup(Component, props);
      const component = await screen.findByTestId("logo");
      expect(component).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", async () => {
      basicSetup(Component, props);
      const component = await screen.findByTestId("logo");
      expect(component).toMatchSnapshot();
   });
});
