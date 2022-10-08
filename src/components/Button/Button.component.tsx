/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Button.component
 * @description: Button component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Styles */
import Style from "./Button.module.scss";

/* --------------------------------------------- */

/**
 * @function Button
 * @description Main functional component
 * @returns {JSX} A react element
 */
function Button() {
   return (
      <div data-testid="button-component">
         <button className={Style.myButton}>Click me!</button>
      </div>
   );
}

/* --------------------------------------------- */

/** @static Component fields */
Button.fields = {
   componentName: "button",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Button;
