/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Text.component.hooks
 * @description: Text component hooks
 */

/* --------------------------------------------- */

/** @import Interfaces */
import { FieldProps } from "./../Field.component";

/** @import Utilities */
import { setTextFieldProperties } from "./Text.component.utils";

/* --------------------------------------------- */

/**
 * @function useTextStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useTextStateAndEvents = () => {
   /**
    * @function initializeTextFieldSetup
    * @description Helps to initialize text field setup
    * @param {FieldProps} props - Field properties setup in form.config file
    * @returns {React.ReactNode} an React node
    */
   const initializeTextFieldSetup = (props: FieldProps) => {
      /** @constant */
      const { type } = props;

      switch (type) {
         default:
         case "text":
            return setTextFieldProperties(props);

         case "password":
            return setTextFieldProperties(props);
      }
   };

   /* ----------------------- */

   return { initializeTextFieldSetup };
};
