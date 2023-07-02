/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 * website
 */

import React from "react";
import { View } from "react-native";

import env from "@core/env.mjs";
import { useLifecycleLogger } from "@core/hooks";
import { Text } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import DeviceInfo from "react-native-device-info";

/**
 * About
 */
function About(): JSX.Element {
  useLifecycleLogger(About.name);
  const { t } = useTranslation("app");
  return (
    <View>
      <Text>{DeviceInfo.getApplicationName()}</Text>
      <Text>{t("name")}</Text>
      <Text>{DeviceInfo.getReadableVersion()}</Text>
      <Text>{env.ENV}</Text>
    </View>
  );
}

export default About;
