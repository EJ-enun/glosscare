/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function SliderControl(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="153px"
      height="21px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SliderControl")}
    >
      <View
        position="absolute"
        top="42.86%"
        bottom="42.86%"
        left="0%"
        right="0%"
        borderRadius="100px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle414465")}
      ></View>
      <View
        position="absolute"
        top="42.86%"
        bottom="42.86%"
        left="0%"
        right="49.67%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(51,51,51,1)"
        {...getOverrideProps(overrides, "Rectangle414466")}
      ></View>
      <Icon
        width="13px"
        height="13px"
        viewBox={{ minX: 0, minY: 0, width: 13, height: 13 }}
        paths={[
          {
            d: "M13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5Z",
            fill: "rgba(51,51,51,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="calc(50% - 6.5px - 0px)"
        left="calc(50% - 6.5px - 0px)"
        {...getOverrideProps(overrides, "handle")}
      ></Icon>
    </View>
  );
}
