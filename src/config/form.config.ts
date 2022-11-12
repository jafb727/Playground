/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: form.config
 * @description: All forms in app configuration.
 */

/* --------------------------------------------- */

/** @import Utilities */
import { Regexp } from "../utils/regexp.utils";

/** @import Assets */
import Text from "../assets/typography/Text.json";

/* --------------------------------------------- */

/**
 * @exports @function Login
 * @description form configuration
 */
export const LogIn = {
   new: {
      api: {
         endpoint: "",
         method: "GET",
      },
      logo: {
         altText: "Login form logo",
         alignment: "center",
         size: "small",
         color: "primary",
      },
      fields: [
         {
            autoComplete: "",
            id: "username",
            info: Text.infoUserNameInput,
            label: "Username",
            focus: true,
            placeholder: "e.g. name@domain.com",
            required: true,
            type: "text",
            validations: [
               {
                  type: "required",
                  error: "Username is required",
                  required: true,
               },
               {
                  type: "pattern",
                  error: "Should be an email account",
                  regex: Regexp.email,
               },
            ],
         },
         {
            autoComplete: "",
            id: "password",
            info: [
               Text.infoPwdCondMinLength,
               Text.infoPwdCondOneCapital,
               Text.infoPwdCondOneNumber,
               Text.infoPwdCondOneSpecial,
            ],
            label: "Password",
            placeholder: "Password",
            required: true,
            type: "password",
            validations: [
               {
                  type: "required",
                  error: "Password is required",
                  required: true,
               },
               {
                  type: "password",
                  error: "Length should be at least 12",
                  condition: "minLength",
                  minLength: 12,
               },
               {
                  type: "password",
                  error: "Should have at least one capital letter",
                  condition: "oneCapital",
               },
               {
                  type: "password",
                  error: "Should have at least one number",
                  condition: "oneNumber",
               },
               {
                  type: "password",
                  error: "Should have at least one special character",
                  condition: "oneSpecialChar",
               },
            ],
         },
      ],
      subtitle: "Use your MY account",
      title: "Login",
   },
};
