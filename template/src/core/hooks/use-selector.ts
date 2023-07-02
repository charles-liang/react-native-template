/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { RootState } from "@core/store.types";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector
} from "react-redux";

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;
