/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: form.config
 * @description: All forms in app configuration.
 */

/* --------------------------------------------- */

/** @import Utilities */
import { Regexp } from "../utils/regexp.utils";

/* --------------------------------------------- */

/** @exports @function Login form configuration */
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
            info: "Email you register as an account",
            label: "Username",
            focus: true,
            placeholder: "e.g. name@domain.com",
            required: true,
            type: "text",
            validation: [
               {
                  type: "required",
                  error: { message: "", title: "" },
                  required: true,
               },
               {
                  type: "word",
                  error: { message: "", title: "" },
                  regex: Regexp.email,
               },
            ],
         },
         {
            autoComplete: "",
            id: "password",
            info: [
               "At least 12 characters",
               "At least one uppercase letter",
               "At least one number",
               "At least one of these special characters: !@#?]",
            ],
            label: "Password",
            placeholder: "Password",
            required: true,
            type: "password",
            validation: [
               {
                  type: "required",
                  error: { message: "", title: "" },
                  required: true,
               },
            ],
         },
      ],
      subtitle: "Use your MY account",
      title: "Login",
   },
};
