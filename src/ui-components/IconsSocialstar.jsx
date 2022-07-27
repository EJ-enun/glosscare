/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsSocialstar(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="40px"
      height="40px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
      paths={[
        {
          d: "M11 16.0737L17.798 20L15.994 12.6L22 7.62105L14.091 6.96842L11 0L7.909 6.96842L0 7.62105L5.995 12.6L4.202 20L11 16.0737Z",
          fill: "rgba(104,107,111,1)",
          fillRule: "nonzero",
          style: {
            transform:
              "translate(calc(50% - 11px - 0px), calc(50% - 10px - 0px))",
          },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "IconsSocialstar")}
    ></Icon>
  );
}
