/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Content.form.hook
 * @description: Form content component hook
 */

/* --------------------------------------------- */

/** @import Components */
import Field from "../../Field";

/** @import Interfaces */
import { FormFieldsProps } from "./Content.form.component";
import { FormField } from "../../../config/interface.config";

/* --------------------------------------------- */

/**
 * @function useFormContentStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFormContentStateAndEvents = (props: FormFieldsProps) => {
   /** @constant Properties */
   const { formMetadata } = props;

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

   const formFields = setupFormFields(formMetadata?.fields);

   /* ----------------------- */

   return {
      formFields,
   };
};
