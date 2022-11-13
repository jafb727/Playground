/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Header.form.hook
 * @description: Form header component hooks
 */

/* --------------------------------------------- */

/** @import Components */
import Logo from "../../Logo";
import Typography from "@mui/material/Typography";

/** @import Interfaces */
import { FormHeaderProps } from "./Header.form.component";
import { LogoItem } from "../../../config/interface.config";

/* --------------------------------------------- */

/**
 * @function useFormHeaderStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFormHeaderStateAndEvents = (props: FormHeaderProps) => {
   /** @constant Properties */
   const { alignment, asModal, formMetadata } = props;

   /* ----------------------- */

   /**
    * @function setupFormLogo
    * @description Helps to setup a form logo based on a setup
    * @param {LogoItem} logoSetup - Logo setup in according to form.config schema
    * @returns {React.ReactNode|undefined} A React node or undefined
    */
   const setupFormLogo = (logoSetup: LogoItem | undefined) => {
      if (logoSetup) {
         return <Logo options={{ ...logoSetup, ...{ alignment } }} />;
      }

      return undefined;
   };

   /* ----------------------- */

   /**
    * @function setupFormTitle
    * @description Helps to setup a form title based on a setup
    * @param {string} title - Form title
    * @param {boolean} asModal - Is Form rendering in a modal
    * @returns {React.ReactNode|undefined} A React node or undefined
    */
   const setupFormTitle = (title: string | undefined, asModal?: boolean) => {
      if (title) {
         /** Title format when showing form in modal mode */
         if (asModal) {
            return title;
         }

         /** Title format when showing form in page mode */
         return <Typography variant="h6">{title}</Typography>;
      }

      return undefined;
   };

   /* ----------------------- */

   /**
    * @function setupFormSubTitle
    * @description Helps to setup a form subtitle based on setup
    * @param {string} subtitle - Form subtitle
    * @returns {React.ReactNode|undefined} A React node or undefined
    */
   const setupFormSubTitle = (subtitle: string | undefined) => {
      if (subtitle) {
         return <Typography variant="body1">{subtitle}</Typography>;
      }

      return undefined;
   };

   /** Building form */
   const formLogo = setupFormLogo(formMetadata?.logo);
   const formSubTitle = setupFormSubTitle(formMetadata?.subtitle);
   const formTitle = setupFormTitle(formMetadata?.title, asModal);

   /* ----------------------- */

   return {
      formLogo,
      formSubTitle,
      formTitle,
      setupFormLogo,
      setupFormSubTitle,
      setupFormTitle,
   };
};
