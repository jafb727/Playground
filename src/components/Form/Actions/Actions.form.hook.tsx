/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Actions.form.hook
 * @description: Form actions component hook
 */

/* --------------------------------------------- */

/** @import Interfaces */
import { FormFooterProps } from "./Actions.form.component";

/** @import Utilities */
import { setContainerAlignment } from "../../../utils/common.utils";

/* --------------------------------------------- */

/**
 * @function useFormActionsStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useFormActionsStateAndEvents = (props: FormFooterProps) => {
   /** @constant Properties */

   /* ----------------------- */

   const actionsAlignment = setContainerAlignment("right");

   /* ----------------------- */

   return { actionsAlignment };
};
