/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Routing.fallback.hook
 * @description: Routing fallback hooks
 */

/* --------------------------------------------- */

/** @import Hooks */
import { useEffect, useState, useRef } from "react";

/** @import Utilities */
import { Device } from "../../../utils/style.utils";

/** @import Styles */
import GlobalVariables from "./../../../assets/style/abstracts/_variables.module.scss";

/** @import Assets */
import LargeVideo from "./../../../assets/video/404/SpaceL.mp4";
import MediumVideo from "./../../../assets/video/404/SpaceM.mp4";
import LargePoster from "./../../../assets/images/404/ThumbnailSpaceL.png";
import MediumPoster from "./../../../assets/images/404/ThumbnailSpaceM.png";
import MiniPoster from "./../../../assets/images/404/ThumbnailSpaceMi.png";
import SmallPoster from "./../../../assets/images/404/ThumbnailSpaceS.png";

/* --------------------------------------------- */

/**
 * @function useRoutingFallbackStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useRoutingFallbackStateAndEvents = () => {
   /** @constant State */
   const [videoSource, setVideoSource] = useState<string>("");
   const [videoPoster, setVideoPoster] = useState<string>("");

   /** @constant References */
   const videoRef: any = useRef();
   const videoSrcRefreshCtrl: any = useRef();
   const videoPosterRefreshCtrl: any = useRef();

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
      /** No video for mobile */
      if (
         innerWidth <= parseInt(GlobalVariables.breakpointMobile) &&
         videoSrcRefreshCtrl.current !== Device.mobile
      ) {
         videoSrcRefreshCtrl.current = Device.mobile;
         setVideoSource("");
         return Device.mobile;
      }

      /** No video for tablet */
      if (
         innerWidth > parseInt(GlobalVariables.breakpointMobile) &&
         innerWidth <= parseInt(GlobalVariables.breakpointTablet) &&
         videoSrcRefreshCtrl.current !== Device.tablet
      ) {
         videoSrcRefreshCtrl.current = Device.tablet;
         setVideoSource("");
         return Device.tablet;
      }

      /** Source video for laptop */
      if (
         innerWidth > parseInt(GlobalVariables.breakpointTablet) &&
         innerWidth <= parseInt(GlobalVariables.breakpointLaptop) &&
         videoSrcRefreshCtrl.current !== Device.laptop
      ) {
         videoSrcRefreshCtrl.current = Device.laptop;
         setVideoSource(MediumVideo);
         return Device.laptop;
      }

      /** Source video for desktop */
      if (
         innerWidth > parseInt(GlobalVariables.breakpointLaptop) &&
         videoSrcRefreshCtrl.current !== Device.desktop
      ) {
         videoSrcRefreshCtrl.current = Device.desktop;
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
      if (
         innerWidth <= parseInt(GlobalVariables.breakpointMobile) &&
         videoPosterRefreshCtrl.current !== Device.mobile
      ) {
         videoPosterRefreshCtrl.current = Device.mobile;
         setVideoPoster(MiniPoster);
         return Device.mobile;
      }

      /** Thumbnail for tablet userAgent */
      if (
         innerWidth > parseInt(GlobalVariables.breakpointMobile) &&
         innerWidth <= parseInt(GlobalVariables.breakpointTablet) &&
         videoPosterRefreshCtrl.current !== Device.tablet
      ) {
         videoPosterRefreshCtrl.current = Device.tablet;
         setVideoPoster(SmallPoster);
         return Device.tablet;
      }

      /** Source for laptop userAgent */
      if (
         innerWidth > parseInt(GlobalVariables.breakpointTablet) &&
         innerWidth <= parseInt(GlobalVariables.breakpointLaptop) &&
         videoPosterRefreshCtrl.current !== Device.laptop
      ) {
         videoPosterRefreshCtrl.current = Device.laptop;
         setVideoPoster(MediumPoster);
         return Device.laptop;
      }

      /** Source for desktop userAgent */
      if (
         innerWidth > parseInt(GlobalVariables.breakpointLaptop) &&
         videoPosterRefreshCtrl.current !== Device.desktop
      ) {
         videoPosterRefreshCtrl.current = Device.desktop;
         setVideoPoster(LargePoster);
         return Device.desktop;
      }

      return true;
   };

   /* ----------------------- */

   /**
    * @function useEffect
    * @description Sets the conditions to start listening viewport rezising
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
    * @function useEffect
    * @description Updates video background
    */
   useEffect(() => {
      /** Reload video space background when URL source changes */
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
