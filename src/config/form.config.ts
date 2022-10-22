/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: form.config
 * @description: All forms in app configuration.
 */

/* --------------------------------------------- */

/** @export @interface FormAPI */
export interface FormAPI {
   endpoint: string;
   method: string;
}

/** @export @interface FormLogo */
export interface FormLogo {
   altText?: string;
   alignment?: string;
   size?: string;
   color?: string;
}

/** @export @interface FormFieldInfo */
export interface FormFieldInfo {
   message: string | Array<string>;
}

/** @export @interface FormFieldValidationError */
export interface FormFieldValidationError {
   message: string;
   title?: string;
}

/** @export @interface FormFieldValidation */
export interface FormFieldValidation {
   type: string;
   error: FormFieldValidationError;
   required?: boolean;
   regex?: any;
}

/** @export @interface FormField */
export interface FormField {
   id: string;
   info: FormFieldInfo;
   label: string;
   placeholder?: string;
   required?: boolean;
   type: string;
   validation?: Array<FormFieldValidation>;
}

/** @export @interface FormMetadata */
export interface FormMetadata {
   api: FormAPI;
   logo?: FormLogo;
   fields: Array<FormField>;
   subtitle?: string;
   title?: string;
}

/** @exports @interface FormType */
export interface FormType {
   new?: FormMetadata;
   edit?: FormMetadata;
   view?: FormMetadata;
}

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
            id: "username",
            info: {
               message: "",
            },
            label: "Username",
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
                  regex: /^([\w\d.])+@([\w\d])+.([a-z]{3})$/g,
               },
            ],
         },
         {
            id: "password",
            info: {
               message: [
                  "At least 12 characters",
                  "At least one uppercase letter",
                  "At least one number",
                  "At least one of these special characters: !@#?]",
               ],
            },
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
