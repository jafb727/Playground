/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Logo.component.hooks
 * @description: Logo component hooks
 */

/* --------------------------------------------- */

/** @import Libraries */
import { useCallback, useEffect, useState } from "react";

/** @import Interfaces */
import { LogoProps } from "./Logo.component";

/** @import Utilities */
import { setLogoName } from "./Logo.component.utils";
import { setContainerAlignment } from "../../utils/common.utils";

/* --------------------------------------------- */

/**
 * @function useLogoStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useLogoStateAndEvents = (props: LogoProps) => {
   /** @constant Properties */
   const { options } = props;
   const { altText, alignment, size, color } = options;

   /** Setting logo source */
   const logoAlignment: any = setContainerAlignment(alignment);
   const logoName = setLogoName(size, color);

   /** @constant State */
   const [logoSource, setLogoSource] = useState<any>();

   /* ----------------------- */

   /**
    * @async @function fetchLogo
    * @description Dinamically imports logo file from assets and sets it in state
    * @returns {File} a logo file as data:image
    */
   const fetchLogo = useCallback(async () => {
      const response = await import(`./../../assets/images/Logo/${logoName}`);
      setLogoSource(response.default);
      return response.default;
   }, [logoName]);

   /* ----------------------- */

   useEffect(() => {
      fetchLogo();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   /* ----------------------- */

   return { altText, fetchLogo, logoSource, logoAlignment };
};
