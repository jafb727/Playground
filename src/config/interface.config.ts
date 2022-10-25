/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: interface.config
 * @description: All global and most used interfaces in app.
 */

/* --------------------------------------------- */

/** @export @interface FormAPI */
export interface FormAPI {
   endpoint: string;
   method: string;
}

/* --------------------------------------------- */

/** @export @interface FormLogo */
export interface FormLogo {
   altText?: string;
   alignment?: string;
   size?: string;
   color?: string;
}

/* --------------------------------------------- */

/** @export @interface FormFieldInfo */
export interface FormFieldInfo {
   message: string | Array<string>;
}

/* --------------------------------------------- */

/** @export @interface FormFieldValidationError */
export interface FormFieldValidationError {
   message: string;
   title?: string;
}

/* --------------------------------------------- */

/** @export @interface FormFieldValidation */
export interface FormFieldValidation {
   type: string;
   error: FormFieldValidationError;
   required?: boolean;
   regex?: any;
}

/* --------------------------------------------- */

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

/* --------------------------------------------- */

/** @export @interface FormMetadata */
export interface FormMetadata {
   api: FormAPI;
   logo?: FormLogo;
   fields: Array<FormField>;
   subtitle?: string;
   title?: string;
}

/* --------------------------------------------- */

/** @exports @interface FormType */
export interface FormType {
   new?: FormMetadata;
   edit?: FormMetadata;
   view?: FormMetadata;
}

/* --------------------------------------------- */

/**
 * @exports @interface ResponsiveSize
 * @description Used to add resposive behavior to components in different user agents
 */
export interface ResponsiveSize {
   elementSize?: number;
   sizeInMobile?: number;
   sizeInTablet?: number;
   sizeInLaptop?: number;
   sizeInDesktop?: number;
}
