/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Password.component.hooks
 * @description: Password component hooks
 */

/* --------------------------------------------- */

/** @import Libraries */
import { useState } from "react";

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/* --------------------------------------------- */

/** @type Password setup */
type PasswordSetup = {
   value: string;
   visibility: boolean;
};

/** @type Error setup */
type ErrorSetup = {
   isThereAnError: boolean;
   message: string;
};

/* --------------------------------------------- */

/**
 * @function usePasswordStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const usePasswordStateAndEvents = (props: FieldProps) => {
   /** @constant State */
   const [passwordSetup, setPasswordSetup] = useState<PasswordSetup>({
      value: "",
      visibility: false,
   });
   const [errorSetup, setErrorSetup] = useState<ErrorSetup>({
      isThereAnError: false,
      message: "",
   });

   /* ----------------------- */

   /**
    * @function updatePasswordFieldValue
    * @description Stores current password input value in state
    * @param {key} prop - key in password setup
    * @param {React.ChangeEvent<HTMLInputElement>} event - event information
    * @returns {boolean} a boolean
    */
   const updatePasswordFieldValue = (
      prop: keyof PasswordSetup,
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setPasswordSetup({ ...passwordSetup, [prop]: event.target.value });
      return true;
   };

   /* ----------------------- */

   /**
    * @function setPasswordVsby
    * @description Handles password visibility button click
    * @returns {boolean} a boolean
    */
   const setPasswordVsby = () => {
      setPasswordSetup({
         ...passwordSetup,
         visibility: !passwordSetup.visibility,
      });
      return true;
   };

   /* ----------------------- */

   /**
    * @function handleMouseDownPassword
    * @description Handles user action when mouse is clicked
    * @param {React.MouseEvent} event - event information
    * @returns {boolean} a boolean
    */
   const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
      return true;
   };

   /* ----------------------- */

   /**
    * @function onFieldChange
    * @description Handles field event change
    * @param {React.ChangeEvent<HTMLInputElement>} event - event information
    * @returns {boolean} a boolean
    */
   const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { evaluateField, validations } = props;

      updatePasswordFieldValue("value", event);
      const { evaluation, errorMessage } = evaluateField?.(
         validations,
         event.target.value
      );

      if (!evaluation) {
         setErrorSetup({
            isThereAnError: true,
            message: errorMessage,
         });
      } else {
         setErrorSetup({
            isThereAnError: false,
            message: "",
         });
      }

      return evaluation;
   };

   /* ----------------------- */

   return {
      errorSetup,
      handleMouseDownPassword,
      setPasswordVsby,
      onFieldChange,
      passwordSetup,
      updatePasswordFieldValue,
   };
};
