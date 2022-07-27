/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Defaultmarkercomponent(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="16px"
      height="20px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Defaultmarkercomponent")}
    >
      <View
        width="16px"
        height="20px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Icon
          width="14.9130859375px"
          height="19.119140625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.9130859375,
            height: 19.119140625,
          }}
          paths={[
            {
              d: "M7.45644 19.1191C7.85163 19.1191 14.9129 11.5745 14.9129 7.45644C14.9129 3.33836 11.5745 0 7.45644 0C3.33836 0 0 3.33836 0 7.45644C0 11.5745 7.06126 19.1191 7.45644 19.1191ZM7.45645 11.1859C9.54432 11.1859 11.2369 9.49332 11.2369 7.40545C11.2369 5.31758 9.54432 3.62503 7.45645 3.62503C5.36859 3.62503 3.67604 5.31758 3.67604 7.40545C3.67604 9.49332 5.36859 11.1859 7.45645 11.1859Z",
              fill: "rgba(29,174,239,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="0.98%"
          bottom="3.43%"
          left="0.66%"
          right="6.13%"
          {...getOverrideProps(overrides, "Vector5974627")}
        ></Icon>
        <Icon
          width="7.45654296875px"
          height="19.119140625px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 7.45654296875,
            height: 19.119140625,
          }}
          paths={[
            {
              d: "M0 7.45644C0 11.5745 7.06126 19.1191 7.45644 19.1191L7.45644 11.1859C5.36858 11.1858 3.67604 9.49331 3.67604 7.40545C3.67604 5.31759 5.36858 3.62504 7.45644 3.62503L7.45644 0C3.33836 0 0 3.33836 0 7.45644Z",
              fill: "rgba(62,195,255,1)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="0.98%"
          bottom="3.43%"
          left="0.66%"
          right="52.74%"
          {...getOverrideProps(overrides, "Vector5974628")}
        ></Icon>
      </View>
    </View>
  );
}
