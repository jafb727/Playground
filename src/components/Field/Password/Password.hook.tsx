/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Password.hook
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

   return {
      handleMouseDownPassword,
      handlePasswordVsby,
      passwordVsby,
   };
};
