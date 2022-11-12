/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Field.component.utils
 * @description: Field component utilities
 */

/* --------------------------------------------- */

/** @import Components */
import Password from "./Password";
import Text from "./Text";

/** @import Interfaces */
import { FieldProps } from "./Field.component";
import { FormFieldValidation } from "../../config/interface.config";

/** @import Utilities */
import { Regexp } from "../../utils/regexp.utils";

/* --------------------------------------------- */

/**
 * @exports @function initializeFieldSetup
 * @description Helps to initialize field setup
 * @param {FieldProps} props - Field properties setup in form.config file
 * @returns {React.ReactNode} an React node
 */
export const initializeFieldSetup = (props: FieldProps) => {
   /** @constant */
   const { type } = props;

   switch (type) {
      case "password":
         return <Password {...{ ...props, evaluateField: evaluateField }} />;

      default:
      case "text":
         return <Text {...props} />;
   }
};

/* --------------------------------------------- */

/**
 * @exports @function evaluateField
 * @description Based on a field configuration performs an evaluation for each validation condition
 * @param {Array<FormFieldValidation>} validations - Validations setup for field
 * @param {any} value - field value entered by user
 * @returns {object} {evaluation, errorMessage}
 */
export const evaluateField = (
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

/* --------------------------------------------- */

/**
 * @function evaluateRequired
 * @description Evaluates if a field is required an value was entered
 * @param {FormFieldValidation} validationSetup - validation setup information
 * @param {any} value - field value entered by user
 * @returns {boolean} true is condition evaluates correctly
 */
const evaluateRequired = (validationSetup: FormFieldValidation, value: any) => {
   const { required, error } = validationSetup;
   let evaluationResult = false;

   if (String(required) === "true" && value) {
      evaluationResult = true;
   }

   return { result: evaluationResult, error };
};

/* --------------------------------------------- */

/**
 * @function evaluatePattern
 * @description Evaluates if a field matches defined regex patters
 * @param {FormFieldValidation} validationSetup - validation setup information
 * @param {any} value - field value entered by user
 * @returns {boolean} true is condition evaluates correctly
 */
const evaluatePattern = (validationSetup: FormFieldValidation, value: any) => {
   const { regex, error } = validationSetup;
   let evaluationResult = false;

   if (value && regex.test(value)) {
      evaluationResult = true;
   }

   return { result: evaluationResult, error };
};

/* --------------------------------------------- */

/**
 * @function evaluatePassword
 * @description Evaluates if a field matches defined password conditions based on configuration
 * @param {FormFieldValidation} validationSetup - validation setup information
 * @param {any} value - field value entered by user
 * @returns {boolean} true is condition evaluates correctly
 */
const evaluatePassword = (validationSetup: FormFieldValidation, value: any) => {
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
