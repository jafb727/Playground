/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Collection.container
 * @description: Collection container. Renders a queue of elements organized
 * from left to right by default. Each element can have is own flex size
 * to fit inside the collection of elements.
 */

/* --------------------------------------------- */

/** @import Libraries */
import React from "react";

/** @import Components */
import { Box } from "@mui/material";

/** @import Hooks */
import { useCollectionStateAndEvents } from "./Collection.hook";

/** @import Styles */
import Style from "./Collection.module.scss";

/* --------------------------------------------- */

/** @exports @interface Collection properties */
export interface CollectionProps {
   children?: React.ReactNode;
   className?: string;
   alignment?: string;
   style?: object;
}

/* --------------------------------------------- */

/**
 * @function Collection
 * @description Main functional component
 * @returns {React.ReactNode} A React element
 */
const Collection = (props: CollectionProps) => {
   /** @constant Properties */
   const { children, className = "", style } = props;

   /** @constant Hooks call */
   const { collectionAlignment } = useCollectionStateAndEvents(props);

   /* ----------------------- */

   return (
      <Box
         className={`${Style.collectionContainer} ${className}`}
         data-testid="collection"
         sx={{ ...collectionAlignment, ...style }}
      >
         {children}
      </Box>
   );
};

/* --------------------------------------------- */

/** @exports @default component */
export default Collection;
