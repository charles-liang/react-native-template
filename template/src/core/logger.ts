/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { InteractionManager } from "react-native";

import { consoleTransport, logger } from "react-native-logs";

import env from "./env.mjs";

const severity = env.LOG_SEVERITY;

const config = {
  transport: [consoleTransport],
  transportOptions: {
    colors: {
      debug: "grey",
      info: "greenBright",
      warn: "yellowBright",
      error: "redBright"
    }
  },
  async: true,
  asyncFunc: InteractionManager.runAfterInteractions,
  dateFormat: "utc",
  printLevel: true,
  printDate: true,
  severity
};

export default logger.createLogger(config);
