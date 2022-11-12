/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: interface.config
 * @description: All global and most used interfaces in app.
 */

/* --------------------------------------------- */

/**
 * @exports @interface APIOptions
 * @description Request options to perform an API call
 */
export interface APIOptions {
   endpoint: string;
   method: string;
}

/* --------------------------------------------- */

/**
 * @exports @interface LogoItem
 * @description Properties to setup a logo item
 */
export interface LogoItem {
   altText?: string;
   alignment?: string;
   size?: string;
   color?: string;
}

/* --------------------------------------------- */

/**
 * @exports @interface FormFieldValidation
 * @description Elements a field validation should have
 */
export interface FormFieldValidation {
   type: string;
   error: string;
   required?: boolean;
   regex?: any;
   condition?: string;
   minLength?: number;
}

/* --------------------------------------------- */

/**
 * @exports @interface FormField
 * @description Properties an input filed in a form may have
 */
export interface FormField {
   autoComplete?: string;
   evaluateField?: Function;
   focus?: boolean;
   id: string;
   info: string | Array<string>;
   label: string;
   placeholder?: string;
   required?: boolean;
   type: string;
   validations?: Array<FormFieldValidation>;
}

/* --------------------------------------------- */

/**
 * @exports @interface FormMetadata
 * @description Used in form.config. Defines the basic configuration a form may have
 */
export interface FormMetadata {
   api: APIOptions;
   logo?: LogoItem;
   fields: Array<FormField>;
   subtitle?: string;
   title?: string;
}

/* --------------------------------------------- */

/**
 * @exports @interface FormType
 * @description All possible form types
 */
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

/* --------------------------------------------- */

/**
 * @exports @interface ComponentBasic
 * @description Global properties any component will have by default
 */
export interface ComponentBasic {
   style?: object;
   className?: string;
   onChange?: Function;
}
