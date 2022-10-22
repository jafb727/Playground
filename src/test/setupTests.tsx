/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: setupTests
 * @description: Testing environment setups
 */

/* --------------------------------------------- */

/** @import Libraries */
import "@testing-library/jest-dom";
import React from "react";

/** @import Components */
import { Router, Routes, Route } from "react-router-dom";

/** @import Utilities */
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

/* --------------------------------------------- */

/**
 * @exports @function basicSetup
 * @description Renders a component
 * @param {any} Component - Component to render
 * @param {any} props - Component properties
 * @returns {HTML} A container to mount in DOM
 */
export const basicSetup = (Component: any, props?: any) => {
   return render(<Component {...props} />);
};

/* --------------------------------------------- */

/** @exports @name history - Global routing object handler */
export const history: any = createMemoryHistory();

/** @exports @type Routing setup properties */
export type RoutingSetupProps = {
   location: string;
   path: string;
};

/**
 * @exports @function routerSetup
 * @description Renders a component with routing
 * @param Component - Component to render with routing
 * @param {object} routingSetup - Custom routing setup
 * @param {object} [props] - Component properties
 * @returns {JSX} A container to mount in DOM
 */
export const routerSetup = (
   Component: React.FunctionComponent,
   routingSetup: RoutingSetupProps,
   props?: any
) => {
   /** Setting up user action navigation in history */
   history.push(routingSetup.location);

   return render(
      <Router location={history.location} navigator={history}>
         <Routes>
            <Route
               path={routingSetup.path}
               element={<Component {...props} />}
            />
         </Routes>
      </Router>
   );
};
