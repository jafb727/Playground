/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.fallback.component
 * @description: App fallback component
 */

/* --------------------------------------------- */

/** @import Styles */
import "./App.fallback.styles.scss";

/** @import Assets */
import Text from "../../../assets/typography/Text.json";

/* --------------------------------------------- */

/**
 * @function AppFallback
 * @description Main functional component. Used when application
 * is being rendered, thats why JSX markup is very simple
 * @returns {JSX} A react element
 */
const AppFallback = () => {
   return (
      <div data-testid="app-fallback">
         <div className="full-page-background">
            <div className="full-size-container app-fallback-container">
               <div className="app-fallback-message">{Text.fallAppMessage}</div>
               <div className="ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
         </div>
      </div>
   );
};

/* --------------------------------------------- */

/** @exports @default component */
export default AppFallback;
