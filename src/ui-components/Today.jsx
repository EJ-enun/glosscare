/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Today(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Today")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="4.17%"
        bottom="12.5%"
        left="12.5%"
        right="12.5%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Icon
          width="18px"
          height="20px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 20 }}
          paths={[
            {
              d: "M16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 7L16 7L16 18ZM4 9L9 9L9 14L4 14L4 9Z",
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
