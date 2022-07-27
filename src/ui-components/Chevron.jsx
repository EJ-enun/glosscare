/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Chevron(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Chevron")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="32.67%"
        bottom="36.46%"
        left="25%"
        right="25%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="12px"
          height="7.41015625px"
          viewBox={{ minX: 0, minY: 0, width: 12, height: 7.41015625 }}
          paths={[
            {
              d: "M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z",
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
