/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ImagePlaceholderImage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="119px"
      height="119px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ImagePlaceholderImage")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(196,196,196,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(234,234,234,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Icon
        width="117.5px"
        height="117.5px"
        viewBox={{ minX: 0, minY: 0, width: 117.5, height: 117.5 }}
        paths={[
          {
            d: "M-0.353553 0.353553L117.146 117.854L117.854 117.146L0.353553 -0.353553L-0.353553 0.353553Z",
            stroke: "rgba(196,196,196,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="0.42%"
        bottom="0.84%"
        left="0.42%"
        right="0.84%"
        {...getOverrideProps(overrides, "Vector414754")}
      ></Icon>
      <Icon
        width="117.5px"
        height="117.5px"
        viewBox={{ minX: 0, minY: 0, width: 117.5, height: 117.5 }}
        paths={[
          {
            d: "M-0.353553 0.353553L117.146 117.854L117.854 117.146L0.353553 -0.353553L-0.353553 0.353553Z",
            stroke: "rgba(196,196,196,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="99.16%"
        bottom="-97.9%"
        left="0.42%"
        right="0.84%"
        transformOrigin="top left"
        transform="rotate(-90deg)"
        {...getOverrideProps(overrides, "Vector414755")}
      ></Icon>
    </View>
  );
}
