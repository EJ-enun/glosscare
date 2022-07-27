/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, View } from "@aws-amplify/ui-react";
export default function ProfileAvatarPicture(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="42px"
      height="42px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ProfileAvatarPicture")}
    >
      <Icon
        width="42px"
        height="42px"
        viewBox={{ minX: 0, minY: 0, width: 42, height: 42 }}
        paths={[
          {
            d: "M42 21C42 32.598 32.598 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21Z",
            fill: "rgba(196,196,196,1)",
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
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
