/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Info.component.utils
 * @description: Info component utilities
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import Button from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";

/** @import Styles */
import Style from "./Info.styles.module.scss";

/* --------------------------------------------- */

/**
 * @exports @function initializeFieldInfoSetup
 * @description Helps to set field info icon if defined in field configuration
 * @param {string | Array<string>} info - Field info configuration
 * @returns {React.ReactNode|null} a React node or null
 */
export const initializeFieldInfoSetup = (info: string | Array<string>) => {
   /** @constant Tooltip content */
   const tooltipContent = (
      <Button className={Style.inputTooltipBtn} variant="contained">
         <InfoOutlinedIcon />
      </Button>
   );

   /* ----------------------- */
   if (info && typeof info === "string") {
      return <Tooltip title={info}>{tooltipContent}</Tooltip>;
   }

   if (info && Array.isArray(info)) {
      return (
         <Tooltip
            title={info.map((item, index) => (
               <div key={`info${index}`}>{item}</div>
            ))}
         >
            {tooltipContent}
         </Tooltip>
      );
   }

   return null;
};
