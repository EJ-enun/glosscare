/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function NotificationsBadgeInactive(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="23px"
      height="23px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "NotificationsBadgeInactive")}
    >
      <Icon
        width="23px"
        height="23px"
        viewBox={{ minX: 0, minY: 0, width: 23, height: 23 }}
        paths={[
          {
            d: "M23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5Z",
            fill: "rgba(149,149,149,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Ellipse")}
      ></Icon>
      <Text
        fontFamily="Roboto"
        fontSize="10px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="11.71875px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="26.09%"
        bottom="21.74%"
        left="34.78%"
        right="39.13%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="0"
        {...getOverrideProps(overrides, "0")}
      ></Text>
    </View>
  );
}
