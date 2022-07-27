/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Loginscreenfingerprint(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="265px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Loginscreenfingerprint")}
    >
      <Flex
        gap="24px"
        position="absolute"
        bottom="12px"
        left="0px"
        direction="column"
        width="375px"
        height="253px"
        borderRadius="8px"
        padding="4px 16px 4px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(
          overrides,
          "BiometricPrompt/Fingerprint Authenitcation/Light/Tall"
        )}
      ></Flex>
    </View>
  );
}
