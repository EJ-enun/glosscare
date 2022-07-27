/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Email(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Email")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="16.67%"
        bottom="16.67%"
        left="8.33%"
        right="8.33%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="20px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 16 }}
          paths={[
            {
              d: "M18 0L2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4L2 2L10 7L18 2L18 4Z",
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
