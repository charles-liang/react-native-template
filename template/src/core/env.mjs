/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import Config from "react-native-config";
import { z } from "zod";

/**
 * Environment schema
 */
const schema = z.object({
  ENV: z.enum(["development", "staging", "production"]),
  API_URL: z.string().url(),
  ANALYTICS: z
    .enum(["true", "false"])
    .default("false")
    .transform(value => value === "true"),
  LOG_SEVERITY: z
    .enum(["debug", "info", "warn", "error"])
    .optional()
    .default("info")
});

/**
 * @type {Record<keyof z.infer<typeof schema>, string | undefined>}
 */
const config = Config;

// ----------------------------------------------------
// Environment validation. Don't touch the part below
// ----------------------------------------------------

/** @typedef {z.input<typeof schema>} Input */
/** @typedef {z.infer<typeof schema>} Output */
/** @typedef {z.SafeParseReturnType<Input, Output>} SafeParseReturn */

/**
 * Environment
 */
let env = /** @type {Output} */ (config);

if (!!Config.SKIP_ENV_VALIDATION === false) {
  const parsed = /** @type {SafeParseReturn} */ schema.safeParse(config);

  if (parsed.success === false) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    console.error(
      `❌ Invalid environment variables: ${JSON.stringify(fieldErrors)}`
    );

    throw new Error("❌ Invalid environment variables.");
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== "string") {
        return undefined;
      }

      return target[/** @type {keyof typeof target} */ prop];
    }
  });
}

export default env;
