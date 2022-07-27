/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function DateRange(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="24px"
      height="24px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "DateRange")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="8.33%"
        bottom="8.33%"
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
              d: "M6 9L4 9L4 11L6 11L6 9ZM10 9L8 9L8 11L10 11L10 9ZM14 9L12 9L12 11L14 11L14 9ZM16 2L15 2L15 0L13 0L13 2L5 2L5 0L3 0L3 2L2 2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20L16 20C17.1 20 18 19.1 18 18L18 4C18 2.9 17.1 2 16 2ZM16 18L2 18L2 7L16 7L16 18Z",
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
