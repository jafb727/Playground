/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: hooks.utils
 * @description: Hooks utilities. Gathers all reusable hooks to
 */

/* --------------------------------------------- */

/** @import Libraries */
import { useEffect, useRef, useState } from "react";

/** @import Interfaces */
import { ResponsiveSize } from "../config/interface.config";

/** @import Utilities */
import { Device } from "./../utils/style.utils";

/** @import Styles */
import GlobalVariables from "./../assets/style/abstracts/_variables.module.scss";

/* --------------------------------------------- */

/** @exports @interface Flex item properties */
export interface FlexItemProps extends ResponsiveSize {
   elementSize?: any;
}

/* --------------------------------------------- */

/**
 * @function useStyleProcessor
 * @description Helps to setup, calculate, transform any style component properties
 * into a useful metadata ready to be used implemented in MUI components
 * @returns {object} Hook functions and state
 */
export const useStyleProcessor = (props: FlexItemProps) => {
   /** @constant State */
   const [flexSize, setFlexSize] = useState<any>();

   /** @constant References */
   const flexSizeRefreshCtrl: any = useRef(flexSize);

   /* ----------------------- */

   /**
    * @event @function setElementSizeUponUA
    * @description Sets container element size depending on device
    * @returns {boolean} A boolean
    */
   const setElementSizeUponUA = () => {
      const { innerWidth } = window;
      setElementSizeInUA(innerWidth, props);
      return true;
   };

   /* ----------------------- */

   /**
    * @function turnFlexSizeToStyle
    * @description Helps to convert a flexSize defined property,
    * into a object that MUI "sx" property would accept
    * @param {number} flexSize - a flexbox unit in format number
    * @returns {object}
    */
   const turnFlexSizeToStyle = (flexSize?: number) => {
      if (flexSize === undefined) {
         return { flex: 1 };
      }

      return { flex: flexSize };
   };

   /* ----------------------- */

   /**
    * @function setElementSizeInUA
    * @description Helps to set an element flexSize defined property, according to
    * its User Agent configuration to support responsive layout
    * @param {number} innerWidth - Current viewport width
    * @param {object} props - Flex item properties
    * @returns {object} an object
    */
   const setElementSizeInUA = (innerWidth: number, props: FlexItemProps) => {
      /** @constant Properties */
      const {
         elementSize,
         sizeInMobile,
         sizeInTablet,
         sizeInLaptop,
         sizeInDesktop,
      } = props;

      /** Element size in container by default */
      if (elementSize && flexSizeRefreshCtrl.current !== "default") {
         flexSizeRefreshCtrl.current = "default";
         setFlexSize(turnFlexSizeToStyle(elementSize));
         return "default";
      }

      /** Mobile size setup is on */
      if (
         sizeInMobile !== undefined &&
         innerWidth <= parseInt(GlobalVariables.breakpointMobile) &&
         flexSizeRefreshCtrl.current !== Device.mobile
      ) {
         flexSizeRefreshCtrl.current = Device.mobile;
         setFlexSize(turnFlexSizeToStyle(sizeInMobile));
         return Device.mobile;
      }

      /** Tablet size setup is on */
      if (
         sizeInTablet !== undefined &&
         innerWidth > parseInt(GlobalVariables.breakpointMobile) &&
         innerWidth <= parseInt(GlobalVariables.breakpointTablet) &&
         flexSizeRefreshCtrl.current !== Device.tablet
      ) {
         flexSizeRefreshCtrl.current = Device.tablet;
         setFlexSize(turnFlexSizeToStyle(sizeInTablet));
         return Device.tablet;
      }

      /** Laptop size setup is on */
      if (
         sizeInLaptop !== undefined &&
         innerWidth > parseInt(GlobalVariables.breakpointTablet) &&
         innerWidth <= parseInt(GlobalVariables.breakpointLaptop) &&
         flexSizeRefreshCtrl.current !== Device.laptop
      ) {
         flexSizeRefreshCtrl.current = Device.laptop;
         setFlexSize(turnFlexSizeToStyle(sizeInLaptop));
         return Device.laptop;
      }

      /** Desktop size setup is on */
      if (
         sizeInDesktop !== undefined &&
         innerWidth > parseInt(GlobalVariables.breakpointLaptop) &&
         flexSizeRefreshCtrl.current !== Device.desktop
      ) {
         flexSizeRefreshCtrl.current = Device.desktop;
         setFlexSize(turnFlexSizeToStyle(sizeInDesktop));
         return Device.desktop;
      }
   };

   /* ----------------------- */

   useEffect(() => {
      /** Adding a resize listener */
      window.addEventListener("resize", setElementSizeUponUA);

      /** Calculating element size in container when first loading */
      if (!flexSize) {
         setElementSizeUponUA();
      }

      return () => {
         /** Avoiding memory leaks */
         window.removeEventListener("resize", setElementSizeUponUA);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   /* ----------------------- */

   return {
      flexSize,
      setElementSizeInUA,
      setElementSizeUponUA,
      turnFlexSizeToStyle,
   };
};
