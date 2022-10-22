/**
 * @author: Jose A Felix
 * @editor: Jose A Felix
 * @name: Collection.container.hooks
 * @description: Collection container hooks
 */

/* --------------------------------------------- */

/** @import Interfaces */
import { CollectionProps } from "./Collection.container";

/** @import Utilities */
import { setContainerAlignment } from "../../utils/common.utils";

/* --------------------------------------------- */

/**
 * @function useCollectionStateAndEvents
 * @description Main container hook
 * @returns {object} Hook functions and state
 */
export const useCollectionStateAndEvents = (props: CollectionProps) => {
   /** @constant */
   const collectionAlignment: any = setContainerAlignment(props.alignment);

   /* ----------------------- */

   return {
      collectionAlignment,
   };
};
