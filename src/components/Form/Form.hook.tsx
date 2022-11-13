/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Form.hook
 * @description: Form component hook
 */

/* --------------------------------------------- */

/** @import Interfaces */
import { FormProps } from "./Form.component";
import { FormType } from "../../config/interface.config";

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
    * @description Helps to setup form metadata to initialize form rendering
    * @param {FormType} setup - Form type according to form.config schema
    * @param {string} type: Form type (new, edit, view)
    * @returns {FormMetadata|undefined} An FormMetadata or undefined
    */
   const setFormMetadata = (setup: FormType, type: string) => {
      if (setup && type) {
         const formSetup = setup[type as keyof FormType];

         if (formSetup) {
            return formSetup;
         }
      }

      return undefined;
   };

   /* ----------------------- */

   /** Getting form setup */
   const formMetadata = setFormMetadata(setup, type);
   const formAlignment = setContainerAlignment(alignment);

   /* ----------------------- */

   return {
      formAlignment,
      formMetadata,
      setFormMetadata,
   };
};
