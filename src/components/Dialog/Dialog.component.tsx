/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Dialog.component
 * @description: Dialog component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

/** @import Hooks */
import { useDialogStateAndEvents } from "./Dialog.component.hooks";

/* --------------------------------------------- */

/** @exports @interface Dialog properties */
export interface DialogProps {
   buttons?: React.ReactNode;
   className?: string;
   content?: React.ReactNode;
   onClose?: Function;
   open: boolean;
   style?: object;
   title?: string | React.ReactNode;
}

/* --------------------------------------------- */

/**
 * @function MYDialog
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const MYDialog = (props: DialogProps) => {
   /** @constant Properties */
   const { className, content, open, style, title } = props;

   /** @constant Hook call */
   const { actionButtons, dialogVsby } = useDialogStateAndEvents(props);

   /* ----------------------- */

   return (
      <Dialog
         className={className}
         data-testid="dialog-component"
         open={open && dialogVsby}
         sx={style}
      >
         <DialogTitle>{title}</DialogTitle>
         <DialogContent dividers>{content}</DialogContent>
         <DialogActions>{actionButtons}</DialogActions>
      </Dialog>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
MYDialog.fields = {
   componentName: "dialog",
};

/* --------------------------------------------- */

/** @exports @default component */
export default MYDialog;
