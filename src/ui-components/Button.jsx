/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="268px"
      height="76px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Button")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(4,42,175,1)"
        {...getOverrideProps(overrides, "button")}
      ></View>
    </View>
  );
}
