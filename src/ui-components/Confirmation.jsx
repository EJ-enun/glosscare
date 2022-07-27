/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Confirmation(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="193px"
      height="196px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 193, height: 196 }}
      paths={[
        {
          d: "M193 98C193 152.124 149.795 196 96.5 196C43.2045 196 0 152.124 0 98C0 43.8761 43.2045 0 96.5 0C149.795 0 193 43.8761 193 98Z",
          fill: "rgba(4,42,175,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M156 79C156 122.63 121.078 158 78 158C34.9218 158 0 122.63 0 79C0 35.3695 34.9218 0 78 0C121.078 0 156 35.3695 156 79Z",
          fill: "rgba(211,211,211,1)",
          fillRule: "nonzero",
          style: { transform: "translate(9.33%, 9.69%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Confirmation")}
    ></Icon>
  );
}
