/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Close(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Close")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="20.83%"
        bottom="20.83%"
        left="20.83%"
        right="20.83%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="14px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
          paths={[
            {
              d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
              fill: "rgba(188,192,194,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}
