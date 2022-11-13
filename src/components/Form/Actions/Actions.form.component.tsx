/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Actions.form.component
 * @description: Form actions component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ErrorBoundary from "../../ErrorBoundary";
import Typography from "@mui/material/Typography";

/** @import Hooks */
import { useFormActionsStateAndEvents } from "./Actions.form.hook";
import { useStyleProcessor } from "../../../utils/hooks/style.hook";

/** @import Interfaces */
import {
   ComponentBasic,
   ResponsiveSize,
} from "../../../config/interface.config";

/** @import Styles */
import Style from "./Actions.form.module.scss";

/** @import Assets */
import Text from "../../../assets/typography/Text.json";

/* --------------------------------------------- */

/** @exports @interface FormFooter properties */
export interface FormFooterProps extends ComponentBasic, ResponsiveSize {}

/* --------------------------------------------- */

/**
 * @function FormActions
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const FormActions = (props: FormFooterProps) => {
   /** @constant Properties */
   const { className, style } = props;

   /** @constant Hook call */
   const { actionsAlignment } = useFormActionsStateAndEvents(props);
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   /** Form is shown in page mode (default) */
   return (
      <ErrorBoundary>
         <Box
            className={className}
            data-testid="form-actions"
            sx={{ ...flexSize, ...actionsAlignment, ...style }}
         >
            <Box className={Style.formActions}>
               <Button variant="contained">
                  <Typography>{Text.btnSubmit}</Typography>
               </Button>
            </Box>
         </Box>
      </ErrorBoundary>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
FormActions.fields = {
   componentName: "form-actions",
};

/* --------------------------------------------- */

/** @exports @default component */
export default FormActions;
