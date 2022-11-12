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

/**
 * @function usePasswordStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const usePasswordStateAndEvents = (props: FieldProps) => {
   /** @constant State */
   const [passwordVsby, setPasswordVsby] = useState(false);
   const [passwordValue, setPasswordValue] = useState("");

   /* ----------------------- */

   /**
    * @function updatePasswordFieldValue
    * @description Stores current password input value in state
    * @param {React.ChangeEvent<HTMLInputElement>} event - Event information
    * @returns {boolean} A boolean
    */
   const updatePasswordFieldValue = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setPasswordValue(event.target.value);
      return true;
   };

   /* ----------------------- */

   /**
    * @function handlePasswordVsby
    * @description Handles password visibility button click
    * @returns {boolean} A boolean
    */
   const handlePasswordVsby = () => {
      setPasswordVsby(!passwordVsby);
      return true;
   };

   /* ----------------------- */

   /**
    * @function handleMouseDownPassword
    * @description Handles user action when mouse is clicked
    * @param {React.MouseEvent} event - Event information
    * @returns {boolean} A boolean
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
    * @param {React.ChangeEvent<HTMLInputElement>} event - Event information
    * @returns {boolean} A boolean
    */
   const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { evaluateField, validations } = props;
      updatePasswordFieldValue(event);
      evaluateField?.(validations, event.target.value);
      return true;
   };

   /* ----------------------- */

   return {
      handleMouseDownPassword,
      handlePasswordVsby,
      onFieldChange,
      passwordValue,
      passwordVsby,
      updatePasswordFieldValue,
   };
};
