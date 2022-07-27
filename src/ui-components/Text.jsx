/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Text(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="161px"
      height="64px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Text")}
    >
      <View
        height="13px"
        position="absolute"
        top="0px"
        left="0px"
        right="-13px"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(175,197,253,1)"
        {...getOverrideProps(overrides, "text748")}
      ></View>
      <View
        height="13px"
        position="absolute"
        top="25px"
        left="0px"
        right="27px"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(175,197,253,1)"
        {...getOverrideProps(overrides, "text749")}
      ></View>
      <View
        height="13px"
        position="absolute"
        top="51px"
        left="0px"
        right="86px"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(175,197,253,1)"
        {...getOverrideProps(overrides, "text750")}
      ></View>
    </View>
  );
}
