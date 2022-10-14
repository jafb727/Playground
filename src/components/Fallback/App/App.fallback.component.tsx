/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.fallback.component
 * @description: App fallback component. Used when application is being rendered
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
      <div className="full-page-background">
         <div
            className="app-fallback-container"
            data-testid="app-fallback-component"
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
