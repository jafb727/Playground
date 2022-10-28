/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Field.component.hooks
 * @description: Field component hooks
 */

/* --------------------------------------------- */

/** @import Components */
import React from "react";
import TextInput from "./Text";

/** @import Interfaces */
import { FieldProps } from "./Field.component";

/* --------------------------------------------- */

/**
 * @function useFieldStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFieldStateAndEvents = (props: FieldProps) => {
   /**
    * @function initializeFieldSetup
    * @description Helps to initialize field setup
    * @param {FieldProps} props - Field properties setup in form.config file
    * @returns {React.ReactNode} an React node
    */
   const initializeFieldSetup = (props: FieldProps) => {
      /** @constant */
      const { type } = props;

      switch (type) {
         default:
         case "password":
         case "text":
            return <TextInput {...props} />;
      }
   };

   /* ----------------------- */

   return { initializeFieldSetup };
};
