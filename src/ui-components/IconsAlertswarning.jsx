/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function IconsAlertswarning(props) {
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
          d: "M12 12.6316L10 12.6316L10 8.42105L12 8.42105L12 12.6316ZM12 16.8421L10 16.8421L10 14.7368L12 14.7368L12 16.8421ZM0 20L22 20L11 0L0 20Z",
          fill: "rgba(104,107,111,1)",
          fillRule: "nonzero",
          style: {
            transform:
              "translate(calc(50% - 11px - 0px), calc(50% - 10px - 0px))",
          },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "IconsAlertswarning")}
    ></Icon>
  );
}
