/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Warning(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Warning")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="8.33%"
        bottom="12.5%"
        left="4.17%"
        right="4.17%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="22px"
          height="19px"
          viewBox={{ minX: 0, minY: 0, width: 22, height: 19 }}
          paths={[
            {
              d: "M0 19L22 19L11 0L0 19ZM12 16L10 16L10 14L12 14L12 16ZM12 12L10 12L10 8L12 8L12 12Z",
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
