/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { AppDispatch } from "@core/store.types";
import { useDispatch as useReduxDispatch } from "react-redux";

const useDispatch: () => AppDispatch = useReduxDispatch;

export default useDispatch;
