/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: App.fallback.component
 * @description: App fallback component
 */

/* --------------------------------------------- */

/** @import Styles */
import GlobalStyle from "./../../../assets/style/base/_styles.module.scss";
import Style from "./App.fallback.styles.module.scss";

/** @import Assets */
import Text from "../../../assets/typography/Text.json";

/* --------------------------------------------- */

/**
 * @function AppFallback
 * @description Main functional component. Used when application
 * is being rendered, thats why JSX markup is very simple
 * @returns {React.ReactNode} A react node
 */
const AppFallback = () => {
   /** @constant */
   const { ellipsis, defaultBackground, fullPageBackground, fullSizeCentered } =
      GlobalStyle;

   /* ----------------------- */

   return (
      <div data-testid="app-fallback">
         <div className={`${defaultBackground} ${fullPageBackground}`}>
            <div
               className={`${fullSizeCentered} ${Style.appFallbackContainer}`}
            >
               <div className={Style.appFallbackMessage}>
                  {Text.fallAppMessage}
               </div>
               <div className={ellipsis}>
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
