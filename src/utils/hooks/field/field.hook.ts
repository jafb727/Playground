/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: field.hook
 * @description: Field component hook
 */

/* --------------------------------------------- */

/** @import Libraries */
import { useState } from "react";

/** @import Interfaces */
import { FieldProps } from "../../../components/Field";

/* --------------------------------------------- */

/**
 * @function useFieldStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFieldStateAndEvents = (props: FieldProps) => {
   /** @constant State */
   const [fieldValue, setFieldValue] = useState("");

   /* ----------------------- */

   /**
    * @function updateFieldValue
    * @description Stores current input value in state
    * @param {React.ChangeEvent<HTMLInputElement>} event - Event information
    * @returns {boolean} A boolean
    */
   const updateFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(event.target.value);
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
      updateFieldValue(event);
      evaluateField?.(validations, event.target.value);
      return true;
   };

   /* ----------------------- */

   return {
      onFieldChange,
      fieldValue,
      updateFieldValue,
   };
};
