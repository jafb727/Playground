/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Info.utils
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
import Style from "./Info.module.scss";

/* --------------------------------------------- */

/**
 * @exports @function initializeFieldInfoSetup
 * @description Helps to set field info icon if defined in field configuration
 * @param {string | Array<string>} info - Field info configuration
 * @returns {React.ReactNode|null} A React node or null
 */
export const initializeFieldInfoSetup = (info: string | Array<string>) => {
   /** @constant Tooltip content */
   const tooltipContent = (
      <Button className={Style.inputTooltipBtn} variant="inputInfo">
         <InfoOutlinedIcon />
      </Button>
   );

   /* ----------------------- */

   /** Setting tooltip content when info message is just a line */
   if (info && typeof info === "string") {
      return <Tooltip title={info}>{tooltipContent}</Tooltip>;
   }

   /** Setting tooltip content when info message is multiline */
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
