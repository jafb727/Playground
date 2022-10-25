/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Form.component.hooks
 * @description: Form component hooks
 */

/* --------------------------------------------- */

/** @import Components */
import Logo from "../Logo";

/** @import Interfaces */
import { FormProps } from "./Form.component";
import { FormMetadata, FormType } from "../../config/interface.config";

/* --------------------------------------------- */

/**
 * @function useFormStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFormStateAndEvents = (props: FormProps) => {
   /** @constant Properties */
   const { setup, type } = props;

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
         return setup[type as keyof FormType];
      }

      return null;
   };

   /** Getting form type setup */
   const formMetadata = setFormMetadata(setup, type);

   /* ----------------------- */

   /**
    * @function setupFormLogo
    * @description Helps to setup a form logo depeding on form configuration
    * @param {FormMetadata} formMetadata - Form metadata according to form.config schema
    * @returns {null|React.ReactNode} a React node or null
    */
   const setupFormLogo = (formMetadata: any | FormMetadata) => {
      if (formMetadata) {
         if (formMetadata.logo) {
            return <Logo options={formMetadata.logo} />;
         }
      }

      return null;
   };

   /** Logo setup if required */
   const formLogo = setupFormLogo(formMetadata);

   /* ----------------------- */

   return { formLogo };
};
