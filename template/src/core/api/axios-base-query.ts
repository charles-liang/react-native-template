/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/react";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";

import baseLogger from "../logger";

const LOGGER_NAME = "API";

const DEFAULT_HTTP_METHOD = "GET";

const logger = baseLogger.extend(LOGGER_NAME);

/**
 * Axios-based baseQuery
 */
const axiosBaseQuery =
  (baseUrl: string): BaseQueryFn<AxiosRequestConfig, unknown, unknown> =>
  // @ts-ignore
  async ({ url, method = DEFAULT_HTTP_METHOD, ...rest }) => {
    try {
      logger.info(`Started ${method.toUpperCase()} "${url}"`);

      const response = await axios({
        baseURL: baseUrl,
        url: url,
        method: method,
        ...rest
      });

      logger.info(
        `Completed ${method.toUpperCase()} "${url}" ${response.status}`
      );

      return { data: response.data };
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          logger.debug(
            `A request was made and the server responded with: ${JSON.stringify(
              error.response
            )}`
          );
        } else if (error.request) {
          logger.debug(
            `A request was made but no response was received: ${JSON.stringify(
              error.request
            )}`
          );
        } else {
          logger.debug(
            `Something happened in setting up the request that triggered an error: ${error.toJSON()}`
          );
        }

        logger.info(
          `Completed ${method.toUpperCase()} "${url}" ${
            error.response?.status || error.request?.status
          }`
        );
      } else {
        logger.error(JSON.stringify(error));
      }

      return error;
    }
  };

export default axiosBaseQuery;
