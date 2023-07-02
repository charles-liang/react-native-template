/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { useEffect } from "react";

import baseLogger from "../logger";
import useEffectOnce from "./use-effect-once";
import useLifecycleInfo from "./use-lifecycle-info";

const LOGGER_NAME = "LIFECYCLE";

const useEffectLogger = (name: string, ...rest: any[]) => {
  const logger = baseLogger.extend(LOGGER_NAME);

  const { isFirstMount, mountCount } = useLifecycleInfo();

  useEffectOnce(() => {
    logger.debug(`${name} mounted.`, ...rest);

    return () => logger.debug(`${name} unmounted.`);
  });

  useEffect(() => {
    if (!isFirstMount) {
      logger.debug(`${name} updated ${mountCount} time(s)`, ...rest);
    }
  });
};

export default useEffectLogger;
