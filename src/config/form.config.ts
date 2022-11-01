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
            info: Text.infoUserNameInput,
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
               Text.infoPasswordInput1,
               Text.infoPasswordInput2,
               Text.infoPasswordInput3,
               Text.infoPasswordInput4,
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
