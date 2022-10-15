/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.fallback.component
 * @description: App fallback component
 */

/* --------------------------------------------- */

/** @import Styles */
import GlobalStyle from "./../../../assets/style/Styles.module.scss";
import Style from "./App.fallback.styles.module.scss";

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
         <div
            className={`${GlobalStyle.defaultBackground} ${GlobalStyle.fullPageBackground}`}
         >
            <div
               className={`${GlobalStyle.fullSizeContainer} ${Style.appFallbackContainer}`}
            >
               <div className={Style.appFallbackMessage}>
                  {Text.fallAppMessage}
               </div>
               <div className={GlobalStyle.ellipsis}>
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
