/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsCameraimage(props) {
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
          d: "M6.11111 11.6667L8.88889 15L12.7778 10L17.7778 16.6667L2.22222 16.6667L6.11111 11.6667ZM20 17.7778L20 2.22222C20 0.988889 19 0 17.7778 0L2.22222 0C1.63285 4.93432e-16 1.06762 0.234126 0.650874 0.650874C0.234126 1.06762 9.86865e-16 1.63285 4.93432e-16 2.22222L4.93432e-16 17.7778C9.86865e-16 18.3671 0.234126 18.9324 0.650874 19.3491C1.06762 19.7659 1.63285 20 2.22222 20L17.7778 20C18.3671 20 18.9324 19.7659 19.3491 19.3491C19.7659 18.9324 20 18.3671 20 17.7778Z",
          fill: "rgba(104,107,111,1)",
          fillRule: "nonzero",
          style: {
            transform:
              "translate(calc(50% - 10px - 0px), calc(50% - 10px - 0px))",
          },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "IconsCameraimage")}
    ></Icon>
  );
}
