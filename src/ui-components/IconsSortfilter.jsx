/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsSortfilter(props) {
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
          d: "M0 0L17 0L17 2.10426L16.9244 2.10426L10.3889 9.38498L10.3889 22L6.61111 17.7915L6.61111 9.37446L0.0849999 2.10426L0 2.10426L0 0Z",
          fill: "rgba(104,107,111,1)",
          fillRule: "nonzero",
          style: {
            transform:
              "translate(calc(50% - 8.5px - 0.5px), calc(50% - 11px - -1px))",
          },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "IconsSortfilter")}
    ></Icon>
  );
}
