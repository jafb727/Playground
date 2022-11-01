/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Info.component
 * @description: Info component
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Box from "@mui/material/Box";

/** @import Hooks */
import { useStyleProcessor } from "../../../utils/hooks.utils";

/** @import Interfaces */
import { FieldProps } from "../Field.component";

/** @import Utilities */
import { initializeFieldInfoSetup } from "./Info.component.utils";

/** @import Styles */
import Style from "./Info.styles.module.scss";

/* --------------------------------------------- */

/**
 * @function Info
 * @description Main functional component
 * @returns {React.ReactNode} A react node
 */
const Info = (props: FieldProps) => {
   /** @constant */
   const { info } = props;

   /** @constant Hooks call */
   const { flexSize } = useStyleProcessor(props);

   /* ----------------------- */

   return (
      <Box
         className={Style.infoContainer}
         data-testid="info-component"
         sx={flexSize}
      >
         {initializeFieldInfoSetup(info)}
      </Box>
   );
};

/* --------------------------------------------- */

/** @static Component fields */
Info.fields = {
   componentName: "info",
};

/* --------------------------------------------- */

/** @exports @default component */
export default Info;
