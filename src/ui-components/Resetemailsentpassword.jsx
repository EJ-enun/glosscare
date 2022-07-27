/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import IconsArrowsback from "./IconsArrowsback";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Resetemailsentpassword(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="29px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="15px 22px 15px 22px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Resetemailsentpassword")}
    >
      <IconsArrowsback
        width="40px"
        height="40px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IconsArrows  back")}
      ></IconsArrowsback>
      <Image
        width="40px"
        height="40px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "email 2")}
      ></Image>
      <Text
        fontFamily="Lato"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.48px"
        width="216px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="We’ve sent you an email"
        {...getOverrideProps(overrides, "Product Name")}
      ></Text>
      <Text
        fontFamily="Lato"
        fontSize="16px"
        fontWeight="400"
        color="rgba(153,153,153,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="314px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please click on the link to verify your account and access the App"
        {...getOverrideProps(overrides, "ProductName")}
      ></Text>
      <View
        width="325px"
        height="51px"
        shrink="0"
        overflow="hidden"
        position="relative"
        boxShadow="0px 15px 35px rgba(0, 0, 0, 0.15000000596046448)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ButtonsPrimary")}
      ></View>
    </Flex>
  );
}
