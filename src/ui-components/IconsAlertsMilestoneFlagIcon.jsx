/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsAlertsMilestoneFlagIcon(props) {
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
          d: "M15 1L1.875 1L1.875 0L0 0L0 1L0 13L0 22L1.875 22L1.875 19.25L1.875 13L15 13L12.1875 7L15 1Z",
          fill: "rgba(104,107,111,1)",
          fillRule: "nonzero",
          style: {
            transform:
              "translate(calc(50% - 7.5px - 0.5px), calc(50% - 11px - 0px))",
          },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "IconsAlertsMilestoneFlagIcon")}
    ></Icon>
  );
}
