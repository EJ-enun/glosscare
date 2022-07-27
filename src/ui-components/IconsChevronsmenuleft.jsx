/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsChevronsmenuleft(props) {
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
          d: "M7 0L0 7L7 14L7 0Z",
          fill: "rgba(104,107,111,1)",
          fillRule: "nonzero",
          style: {
            transform:
              "translate(calc(50% - 3.5px - 1.5px), calc(50% - 7px - 0px))",
          },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "IconsChevronsmenuleft")}
    ></Icon>
  );
}
