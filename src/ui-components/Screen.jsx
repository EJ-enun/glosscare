/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Screen(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="354px"
      height="582px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Screen")}
    >
      <View
        width="354px"
        height="582px"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(114,113,113,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <View
          width="302px"
          height="537px"
          position="absolute"
          top="23px"
          left="27px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(226,223,223,1)"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <View
            width="75px"
            height="137px"
            position="absolute"
            top="109px"
            left="227px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "large product")}
          ></View>
        </View>
        <View
          width="259px"
          height="34px"
          position="absolute"
          top="50px"
          left="48px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "headline")}
        ></View>
      </View>
    </View>
  );
}
