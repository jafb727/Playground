/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: fieldEvaluation.hook
 * @description: Field evaluation hook. Handles field form validation activities
 */

/* --------------------------------------------- */

/** @import Libraries */
import { useState } from "react";

/** @import Interfaces */
import { FormFieldValidation } from "../../config/interface.config";

/** @import Utilities */
import { Regexp } from "../../utils/regexp.utils";

/* --------------------------------------------- */

/**
 * @type Error setup
 * @description Basic members when controlling field validation fail
 */
type ErrorSetup = {
   isThereAnError: boolean;
   message: string;
};

/* --------------------------------------------- */

/**
 * @function useFieldEvaluation
 * @description Helps to evaluate a form field based on configuration,
 * following form.config each field validation setup
 * @returns {object} Hook functions and state
 */
export const useFieldEvaluation = () => {
   /** @constant State */
   const [errorSetup, setErrorSetup] = useState<ErrorSetup>({
      isThereAnError: false,
      message: "",
   });

   /* ----------------------- */

   /**
    * @function evaluatePassword
    * @description Evaluates if a field matches defined password conditions based on configuration
    * @param {FormFieldValidation} validationSetup - Validation setup information
    * @param {any} value - Field value entered by user
    * @returns {boolean} True is condition evaluates correctly
    */
   const evaluatePassword = (
      validationSetup: FormFieldValidation,
      value: any
   ) => {
      const { condition, error, minLength = 0 } = validationSetup;
      let evaluationResult = false;

      if (condition === "minLength") {
         if (value.length >= parseInt(minLength.toString())) {
            evaluationResult = true;
         }
      }

      if (condition === "oneCapital") {
         if (Regexp.oneCapital.test(value)) {
            evaluationResult = true;
         }
      }

      if (condition === "oneNumber") {
         if (Regexp.oneNumber.test(value)) {
            evaluationResult = true;
         }
      }

      if (condition === "oneSpecialChar") {
         if (Regexp.oneSpecialChar.test(value)) {
            evaluationResult = true;
         }
      }

      return { result: evaluationResult, error };
   };

   /* ----------------------- */

   /**
    * @function evaluatePattern
    * @description Evaluates if a field matches defined regex patters
    * @param {FormFieldValidation} validationSetup - Validation setup information
    * @param {any} value - Field value entered by user
    * @returns {boolean} True is condition evaluates correctly
    */
   const evaluatePattern = (
      validationSetup: FormFieldValidation,
      value: any
   ) => {
      const { regex, error } = validationSetup;
      let evaluationResult = false;

      if (value && regex.test(value)) {
         evaluationResult = true;
      }

      return { result: evaluationResult, error };
   };

   /* ----------------------- */

   /**
    * @function evaluateRequired
    * @description Evaluates if a field is required an value was entered
    * @param {FormFieldValidation} validationSetup - validation setup information
    * @param {any} value - Field value entered by user
    * @returns {boolean} True is condition evaluates correctly
    */
   const evaluateRequired = (
      validationSetup: FormFieldValidation,
      value: any
   ) => {
      const { required, error } = validationSetup;
      let evaluationResult = false;

      if (String(required) === "true" && value) {
         evaluationResult = true;
      }

      return { result: evaluationResult, error };
   };

   /* ----------------------- */

   /**
    * @exports @function categorizeAndEvaluate
    * @description Based on a field configuration performs an evaluation for each validation condition
    * @param {Array<FormFieldValidation>} validations - Validations setup for field
    * @param {any} value - Field value entered by user
    * @returns {object} { evaluation, errorMessage }
    */
   const categorizeAndEvaluate = (
      validations: Array<FormFieldValidation>,
      value: any
   ) => {
      let evaluation = true;
      let currentEvaluation: any = {};

      for (let v = 0; v < validations.length; v++) {
         const { type } = validations[v];

         if (type === "required") {
            currentEvaluation = evaluateRequired(validations[v], value);
            if (!currentEvaluation.result) {
               evaluation = false;
               break;
            }
         }

         if (type === "pattern") {
            currentEvaluation = evaluatePattern(validations[v], value);
            if (!currentEvaluation.result) {
               evaluation = false;
               break;
            }
         }

         if (type === "password") {
            currentEvaluation = evaluatePassword(validations[v], value);
            if (!currentEvaluation.result) {
               evaluation = false;
               break;
            }
         }
      }

      return { evaluation, errorMessage: currentEvaluation.error };
   };

   /* ----------------------- */

   /**
    * @function evaluate
    * @description Initializes field form evaluation
    * @param {Array<FormFieldValidation>} validations - Field validations based on form.config setup
    * @param {string} value - Field input value entered by user
    * @returns {boolean} A boolean
    */
   const evaluate = (
      validations: Array<FormFieldValidation>,
      value: string
   ) => {
      const { evaluation, errorMessage } = categorizeAndEvaluate(
         validations,
         value
      );

      /** Setting up error setup if a field validation fails */
      if (!evaluation) {
         setErrorSetup({
            isThereAnError: true,
            message: errorMessage,
         });
      } else {
         /** Cleaning erros setup with evaluation is ok */
         setErrorSetup({
            isThereAnError: false,
            message: "",
         });
      }

      return evaluation;
   };

   /* ----------------------- */

   return {
      categorizeAndEvaluate,
      errorSetup,
      evaluate,
      evaluatePassword,
      evaluatePattern,
      evaluateRequired,
   };
};
