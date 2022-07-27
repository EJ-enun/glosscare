/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import IconsArrowschevronleft from "./IconsArrowschevronleft";
export default function Registerationscreen12(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Registerationscreen12")}
    >
      <View
        width="291px"
        height="57px"
        position="absolute"
        top="23px"
        left="51px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Search field/Label/Default")}
      ></View>
      <IconsArrowschevronleft
        width="40px"
        height="40px"
        position="absolute"
        top="41px"
        left="7px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "Icons/Arrows \u2022 \u21C6/chevron-left"
        )}
      ></IconsArrowschevronleft>
    </View>
  );
}
