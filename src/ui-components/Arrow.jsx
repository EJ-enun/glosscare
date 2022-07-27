/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Arrow(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="206px"
      height="0px"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 206, height: 0 }}
      paths={[
        {
          d: "M208.828 2.82843C210.391 1.26633 210.391 -1.26633 208.828 -2.82843L183.373 -28.2843C181.81 -29.8464 179.278 -29.8464 177.716 -28.2843C176.154 -26.7222 176.154 -24.1895 177.716 -22.6274L200.343 0L177.716 22.6274C176.154 24.1895 176.154 26.7222 177.716 28.2843C179.278 29.8464 181.81 29.8464 183.373 28.2843L208.828 2.82843ZM0 4L206 4L206 -4L0 -4L0 4Z",
          stroke: "rgba(114,113,113,1)",
          fillRule: "nonzero",
          strokeWidth: 8,
          style: { transform: "translate(0%, NaN%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Arrow")}
    ></Icon>
  );
}
