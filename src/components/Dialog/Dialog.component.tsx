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
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MuiDialog from "@mui/material/Dialog";

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
 * @function Dialog
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Dialog = (props: DialogProps) => {
   /** @constant Properties */
   const { className, content, open, style, title } = props;

   /** @constant Hook call */
   const { actionButtons, dialogVsby } = useDialogStateAndEvents(props);

   /* ----------------------- */

   return (
      <Box className={className} data-testid="dialog-component" sx={style}>
         <MuiDialog open={open && dialogVsby}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>{content}</DialogContent>
            <DialogActions>{actionButtons}</DialogActions>
         </MuiDialog>
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Dialog.fields = {
   componentName: "dialog",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Dialog;
