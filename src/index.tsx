/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: index
 * @description: Project Application entry point
 */

/* --------------------------------------------- */

/** @import Libraries */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

/** @import Components */
import { AppFallback } from "./components/Fallback";
import { StyledEngineProvider } from "@mui/material";

/** @constant @import App */
const App = React.lazy(() => import("./containers/App"));

/* --------------------------------------------- */

/** Creating root element in DOM */
const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

/** Rendering App */
root.render(
   <Suspense fallback={<AppFallback />}>
      {/** Adds fist MUI styles to be able to override them after */}
      <StyledEngineProvider injectFirst>
         <App />
      </StyledEngineProvider>
   </Suspense>
);
