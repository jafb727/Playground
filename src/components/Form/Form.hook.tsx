/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Form.hook
 * @description: Form component hooks
 */

/* --------------------------------------------- */

/** @import Components */
import Field from "../Field";

/** @import Interfaces */
import { FormProps } from "./Form.component";
import { FormField, FormType } from "../../config/interface.config";

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

   /**
    * @function setupFormFields
    * @description Helps to setup a form fields based on setup
    * @param {FormMetadata} fieldsSetup - Form metadata according to form.config schema
    * @returns {React.ReactNode[]|null} An array of React node or undefined
    */
   const setupFormFields = (fieldsSetup: Array<FormField> | undefined) => {
      if (fieldsSetup) {
         return fieldsSetup.map((field: FormField) => (
            <Field key={field.id} {...field} />
         ));
      }

      return undefined;
   };

   /* ----------------------- */

   /** Getting form setup */
   const formMetadata = setFormMetadata(setup, type);

   /** Building form */
   const formAlignment = setContainerAlignment(alignment);
   const formFields = setupFormFields(formMetadata?.fields);

   /* ----------------------- */

   return {
      formAlignment,
      formFields,
      formMetadata,
      setFormMetadata,
   };
};
