/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Form.hook
 * @description: Form component hooks
 */

/* --------------------------------------------- */

/** @import Components */
import Field from "../Field";
import Logo from "../Logo";
import Typography from "@mui/material/Typography";

/** @import Interfaces */
import { FormProps } from "./Form.component";
import { FormField, LogoItem, FormType } from "../../config/interface.config";

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
   const { alignment, asModal, setup, type } = props;

   /* ----------------------- */

   /**
    * @function setFormMetadata
    * @description Helps to setup form metadata to init form rendering
    * @param {FormType} setup - Form type according to form.config schema
    * @param {string} type: Form type (new, edit, view)
    * @returns {null|Object} An Object or null
    */
   const setFormMetadata = (setup: FormType, type: string) => {
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
    * @param {LogoItem} logoSetup - Logo setup in according to form.config schema
    * @returns {null|React.ReactNode} A React node or null
    */
   const setupFormLogo = (logoSetup: LogoItem | undefined) => {
      if (logoSetup) {
         return <Logo options={{ ...logoSetup, ...{ alignment } }} />;
      }

      return null;
   };

   /* ----------------------- */

   /**
    * @function setupFormTitle
    * @description Helps to setup a form title based on a setup
    * @param {string} title - Form title
    * @param {boolean} asModal - Is Form rendering in a modal
    * @returns {null|React.ReactNode} A React node or null
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

      return null;
   };

   /* ----------------------- */

   /**
    * @function setupFormSubTitle
    * @description Helps to setup a form subtitle based on setup
    * @param {string} subtitle - Form subtitle
    * @returns {null|React.ReactNode} A React node or null
    */
   const setupFormSubTitle = (subtitle: string | undefined) => {
      if (subtitle) {
         return <Typography variant="body1">{subtitle}</Typography>;
      }

      return null;
   };

   /* ----------------------- */

   /**
    * @function setupFormFields
    * @description Helps to setup a form fields based on setup
    * @param {FormMetadata} fieldsSetup - Form metadata according to form.config schema
    * @returns {null|React.ReactNode[]} An array of React node or null
    */
   const setupFormFields = (fieldsSetup: Array<FormField> | undefined) => {
      if (fieldsSetup) {
         return fieldsSetup.map((field: FormField) => (
            <Field key={field.id} {...field} />
         ));
      }

      return null;
   };

   /* ----------------------- */

   /** Getting form setup */
   const formMetadata = setFormMetadata(setup, type);

   /** Building form */
   const formAlignment = setContainerAlignment(alignment);
   const formLogo = setupFormLogo(formMetadata?.logo);
   const formSubTitle = setupFormSubTitle(formMetadata?.subtitle);
   const formTitle = setupFormTitle(formMetadata?.title, asModal);
   const formFields = setupFormFields(formMetadata?.fields);

   /* ----------------------- */

   return {
      formAlignment,
      formFields,
      formLogo,
      formSubTitle,
      formTitle,
      setupFormLogo,
      setFormMetadata,
      setupFormSubTitle,
      setupFormTitle,
   };
};
