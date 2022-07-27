/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image } from "@aws-amplify/ui-react";
export default function Slashscreen(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      alignItems="center"
      position="relative"
      padding="308px 89px 308px 89px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Slashscreen")}
    >
      <Icon
        width="196px"
        height="196px"
        viewBox={{ minX: 0, minY: 0, width: 196, height: 196 }}
        paths={[
          {
            d: "M196 98C196 152.124 152.124 196 98 196C43.8761 196 0 152.124 0 98C0 43.8761 43.8761 0 98 0C152.124 0 196 43.8761 196 98Z",
            fill: "rgba(196,196,196,1)",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Transition")}
      ></Icon>
      <Image
        width="153px"
        height="132px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "GlossCare  Logo Hi Res01 3")}
      ></Image>
    </Flex>
  );
}
