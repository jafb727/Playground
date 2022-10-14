/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Routing.fallback.hooks
 * @description: Routing fallback hooks
 */

/* --------------------------------------------- */

/** @import Hooks */
import { useEffect, useState, useRef } from "react";

/** @import Utilities */
import { Device } from "./../../../utils/style.utils";

/** @import Styles */
import GlobalVariables from "./../../../assets/style/Variables.module.scss";

/** @import Assets */
import LargeVideo from "./../../../assets/video/404/SpaceL.mp4";
import MediumVideo from "./../../../assets/video/404/SpaceM.mp4";
import LargePoster from "./../../../assets/images/404/ThumbnailSpaceL.png";
import MediumPoster from "./../../../assets/images/404/ThumbnailSpaceM.png";
import MiniPoster from "./../../../assets/images/404/ThumbnailSpaceMi.png";
import SmallPoster from "./../../../assets/images/404/ThumbnailSpaceS.png";

/* --------------------------------------------- */

/**
 * @function useFallbackRoutingStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFallbackRoutingStateAndEvents = () => {
   /** @constant */
   const videoRef: any = useRef();

   /** @constant State */
   const [videoSource, setVideoSource] = useState<string>();
   const [videoPoster, setVideoPoster] = useState<string>();

   /* ----------------------- */

   /**
    * @event @function setVideoResourcesUponUA
    * @description Sets video resources to page video background depending on device
    * @returns {boolean} A boolean
    */
   const setVideoResourcesUponUA = () => {
      const { innerWidth } = window;
      setVideoSourceUponUA(innerWidth);
      setVideoPosterUponUA(innerWidth);
      return true;
   };

   /* ----------------------- */

   /**
    * @function setVideoSourceUponUA
    * @description Sets video source for page background depending on device
    * @param {number} innerWidth - Current viewport width
    * @returns {(boolean|string)} A boolean or current device type as string
    */
   const setVideoSourceUponUA = (innerWidth: number) => {
      /** No video for mobile or tablet */
      if (innerWidth <= parseInt(GlobalVariables.breakpointTablet)) {
         setVideoSource("");
         return Device.tablet;
      }

      /** Source video for laptop */
      if (innerWidth <= parseInt(GlobalVariables.breakpointLaptop)) {
         setVideoSource(MediumVideo);
         return Device.latop;
      }

      /** Source video for desktop */
      if (innerWidth > parseInt(GlobalVariables.breakpointLaptop)) {
         setVideoSource(LargeVideo);
         return Device.desktop;
      }

      return true;
   };

   /* ----------------------- */

   /**
    * @function setVideoPosterUponUA
    * @description Sets video source for page background depending on device
    * @param {number} innerWidth - Current viewport width
    * @returns {(boolean|string)} A boolean or current device type as string
    */
   const setVideoPosterUponUA = (innerWidth: number) => {
      /** Thumbnail for mobile userAgent */
      if (innerWidth <= parseInt(GlobalVariables.breakpointMobile)) {
         setVideoPoster(MiniPoster);
         return Device.mobile;
      }

      /** Thumbnail for tablet userAgent */
      if (innerWidth <= parseInt(GlobalVariables.breakpointTablet)) {
         setVideoPoster(SmallPoster);
         return Device.tablet;
      }

      /** Source for laptop userAgent */
      if (innerWidth <= parseInt(GlobalVariables.breakpointLaptop)) {
         setVideoPoster(MediumPoster);
         return Device.latop;
      }

      /** Source for desktop userAgent */
      if (innerWidth > parseInt(GlobalVariables.breakpointLaptop)) {
         setVideoPoster(LargePoster);
         return Device.desktop;
      }

      return true;
   };

   /* ----------------------- */

   /**
    * @function React.useEffect
    * @description Component mount effects
    */
   useEffect(() => {
      /** Adding a resize listener */
      window.addEventListener("resize", setVideoResourcesUponUA);

      /** Setting video resources the first time */
      if (!videoSource || !videoPoster) {
         setVideoResourcesUponUA();
      }

      return () => {
         /** Avoiding memory leaks */
         window.removeEventListener("resize", setVideoResourcesUponUA);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   /* ----------------------- */

   /**
    * @function React.useEffect
    * @description Reload video space background when URL source changes
    */
   useEffect(() => {
      videoRef.current?.load();
   }, [videoSource]);

   /* ----------------------- */

   return {
      setVideoResourcesUponUA,
      videoSource,
      videoRef,
      videoPoster,
   };
};
