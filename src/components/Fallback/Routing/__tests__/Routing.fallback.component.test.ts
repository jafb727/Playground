/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Routing.fallback.component.test
 * @description: Routing fallback component test cases
 */

/* --------------------------------------------- */

/** @import Libraries */
import { screen } from "@testing-library/react";

/** @import Components */
import Component from "../Routing.fallback.component";

/** @import Utilities */
import { routerSetup, history } from "../../../../test/setupTests";
import userEvent from "@testing-library/user-event";

/* --------------------------------------------- */

/** @event Mocking events */
window.HTMLMediaElement.prototype.load = () => {};

/* --------------------------------------------- */

describe("Routing.fallback.component", () => {
   /** @constant Routing setup */
   const routingSetup = {
      location: "/error",
      path: "/error",
   };

   /* ----------------------- */

   test("Renders component ok", () => {
      routerSetup(Component, routingSetup);
      expect(screen.getByTestId("routing-fallback")).toBeInTheDocument();
   });

   /* ----------------------- */

   test("Back home button navigates ok", async () => {
      routerSetup(Component, routingSetup);
      const button = screen.getByTestId("back-home-button");
      await userEvent.click(button);
      expect(history.location.pathname).toBe("/");
   });

   /* ----------------------- */

   test("Passes shallow snapshot test", () => {
      const component = routerSetup(Component, routingSetup);
      expect(component).toMatchSnapshot();
   });
});
