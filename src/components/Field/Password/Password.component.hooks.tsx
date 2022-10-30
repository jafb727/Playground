/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Password.component.hooks
 * @description: Password component hooks
 */

/* --------------------------------------------- */

/** @import Libraries */
import { useState } from "react";

/* --------------------------------------------- */

/** @type Password setup */
type PasswordSetup = {
   value: string;
   visibility: boolean;
};

/* --------------------------------------------- */

/**
 * @function usePasswordStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const usePasswordStateAndEvents = () => {
   /** @constant State */
   const [passwordSetup, setPasswordSetup] = useState<PasswordSetup>({
      value: "",
      visibility: false,
   });

   /* ----------------------- */

   /**
    * @function updatePasswordFieldValue
    * @description Stores current password input value in state
    * @param {key} prop - key in password setup
    * @returns {boolean} a boolean
    */
   const updatePasswordFieldValue =
      (prop: keyof PasswordSetup) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
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

   return {
      handleMouseDownPassword,
      setPasswordVsby,
      passwordSetup,
      updatePasswordFieldValue,
   };
};
