/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Form.component.hooks
 * @description: Form component hooks
 */

/* --------------------------------------------- */

/** @import Components */
import { Typography } from "@mui/material";
import Logo from "../Logo";

/** @import Interfaces */
import { FormProps } from "./Form.component";
import { FormMetadata, FormType } from "../../config/interface.config";

/** @import Utilities */
import { setContainerAlignment } from "../../utils/common.utils";

/* --------------------------------------------- */

/**
 * @function useFormStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFormStateAndEvents = (props: FormProps) => {
   /** @constant Properties */
   const { alignment, setup, type } = props;

   /* ----------------------- */

   /**
    * @function setFormMetadata
    * @description Helps to setup form metadata to init form rendering
    * @param {any|FormType} setup - Form type according to form.config schema
    * @param {any|string} type: form type (new, edit, view)
    * @returns {null|Object} an Object or null
    */
   const setFormMetadata = (setup: any | FormType, type: any | string) => {
      if (setup && type) {
         const formSetup = setup[type as keyof FormType];

         if (formSetup) {
            return formSetup;
         }
      }

      return null;
   };

   /* ----------------------- */

   /**
    * @function setupFormLogo
    * @description Helps to setup a form logo based on a setup
    * @param {FormMetadata} formMetadata - Form metadata according to form.config schema
    * @returns {null|React.ReactNode} a React node or null
    */
   const setupFormLogo = (formMetadata: any | FormMetadata) => {
      if (formMetadata && formMetadata.logo) {
         return <Logo options={{ ...formMetadata.logo, ...{ alignment } }} />;
      }

      return null;
   };

   /* ----------------------- */

   /**
    * @function setupFormTitle
    * @description Helps to setup a form title based on a setup
    * @param {FormMetadata} formMetadata - Form metadata according to form.config schema
    * @returns {null|React.ReactNode} a React node or null
    */
   const setupFormTitle = (formMetadata: any | FormMetadata) => {
      if (formMetadata && formMetadata.title) {
         return <Typography variant="h6">{formMetadata.title}</Typography>;
      }

      return null;
   };

   /* ----------------------- */

   /**
    * @function setupFormSubTitle
    * @description Helps to setup a form subtitle based on setup
    * @param {FormMetadata} formMetadata - Form metadata according to form.config schema
    * @returns {null|React.ReactNode} a React node or null
    */
   const setupFormSubTitle = (formMetadata: any | FormMetadata) => {
      if (formMetadata && formMetadata.title) {
         return (
            <Typography variant="body1">{formMetadata.subtitle}</Typography>
         );
      }

      return null;
   };

   /* ----------------------- */

   /** Getting form type setup */
   const formMetadata = setFormMetadata(setup, type);

   /** Setting up form */
   const formAlignment = setContainerAlignment(alignment);
   const formLogo = setupFormLogo(formMetadata);
   const formSubTitle = setupFormSubTitle(formMetadata);
   const formTitle = setupFormTitle(formMetadata);

   /* ----------------------- */

   return {
      formAlignment,
      formLogo,
      formSubTitle,
      formTitle,
      setupFormLogo,
      setFormMetadata,
      setupFormSubTitle,
      setupFormTitle,
   };
};
