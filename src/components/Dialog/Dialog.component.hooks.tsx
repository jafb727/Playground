/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Dialog.component.hooks
 * @description: Dialog component hooks
 */

/* --------------------------------------------- */

/** @import Llibraries */
import { useState } from "react";

/** @import Components */
import Button from "@mui/material/Button";

/** @import Interfaces */
import { DialogProps } from "./Dialog.component";

/** @import Assets */
import Text from "./../../assets/typography/Text.json";

/* --------------------------------------------- */

/**
 * @function useDialogStateAndEvents
 * @description Main component hook
 * @returns {object} Hook functions and state
 */
export const useDialogStateAndEvents = (props: DialogProps) => {
   /** @constant Properties */
   const { buttons, onClose } = props;

   /** @constant State */
   const [dialogVsby, setDialogVsby] = useState<boolean>(true);

   /* ----------------------- */

   /**
    * @function closeDialog
    * @description Handles dialog action when executing a closing action
    * @param {undefined|Function} onClose - a custom function to execute when closing dialog
    * @returns {boolean} an boolean
    */
   const closeDialog = (onClose?: Function) => {
      /** Executing custom close action if defined in parent component */
      if (onClose) {
         onClose();
      }

      /** Default closing action */
      setDialogVsby(false);

      return true;
   };

   /* ----------------------- */

   /**
    * @function setDialogButtonActions
    * @description Helps to setup dialog actions buttons based on config or default
    * @param {undefined|React.ReactNode} buttons - Action buttons configuration
    * @returns {null|Object} an Object or null
    */
   const setDialogButtonActions = (buttons?: React.ReactNode) => {
      /** Cancel button added by default */
      return (
         <>
            <Button
               color="secondary"
               onClick={() => closeDialog(onClose)}
               variant="outlined"
            >
               {Text.cancel}
            </Button>
            {buttons}
         </>
      );
   };

   /* ----------------------- */

   /** Setting dialog action buttons */
   const actionButtons = setDialogButtonActions(buttons);

   /* ----------------------- */

   return { actionButtons, dialogVsby, setDialogButtonActions };
};
