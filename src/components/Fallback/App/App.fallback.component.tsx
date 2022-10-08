/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.fallback.component
 * @description: App fallback component.
 * Contains different fallback components for many purposes and uses
 */

/* --------------------------------------------- */

/** @import Styles */
import "./App.fallback.styles.scss";

/** @import Assets */
import Text from "../../../assets/typography/Text.json";

/* --------------------------------------------- */

/**
 * @function AppFallback
 * @description Main functional component
 * @returns {JSX} A react element
 */
const AppFallback = () => {
   return (
      <div className="app-background">
         <div
            className="app-fallback-container"
            data-testid="fallback-component"
         >
            <div className="app-fallback-message">{Text.fallAppMessage}</div>
            <div className="ellipsis">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div>
      </div>
   );
};

/* --------------------------------------------- */

/** @exports @default component */
export default AppFallback;
