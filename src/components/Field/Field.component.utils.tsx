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

/* --------------------------------------------- */

/**
 * @exports @function initializeFieldSetup
 * @description Helps to initialize field setup
 * @param {FieldProps} props - Field properties setup in form.config file
 * @returns {React.ReactNode} A React node
 */
export const initializeFieldSetup = (props: FieldProps) => {
   /** @constant */
   const { type } = props;

   switch (type) {
      case "password":
         return <Password {...props} />;

      default:
      case "text":
         return <Text {...props} />;
   }
};
