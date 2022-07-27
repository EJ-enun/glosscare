/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import IconsArrowsback from "./IconsArrowsback";
export default function Forgotpasswordframe(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Forgotpasswordframe")}
    >
      <View
        width="325px"
        height="51px"
        position="absolute"
        top="333px"
        left="24px"
        overflow="hidden"
        boxShadow="0px 15px 35px rgba(0, 0, 0, 0.15000000596046448)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ButtonsPrimary")}
      ></View>
      <View
        height="16px"
        position="absolute"
        top="237px"
        left="24px"
        right="24px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Label_3")}
      ></View>
      <View
        position="absolute"
        top="261px"
        bottom="503px"
        left="24px"
        right="24px"
        border="1px SOLID rgba(203,203,212,1)"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Input")}
      ></View>
      <View
        height="16px"
        position="absolute"
        top="277px"
        left="39px"
        right="9px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Label_5")}
      ></View>
      <Text
        fontFamily="Lato"
        fontSize="16px"
        fontWeight="400"
        color="rgba(153,153,153,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="190px"
        left="88px"
        right="67px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please verify email to continue"
        {...getOverrideProps(overrides, "Product Name")}
      ></Text>
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
        position="absolute"
        top="157px"
        left="122px"
        right="102px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Show us it’s you!"
        {...getOverrideProps(overrides, "ProductName")}
      ></Text>
      <IconsArrowsback
        width="40px"
        height="40px"
        position="absolute"
        top="16px"
        left="22px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IconsArrows  back")}
      ></IconsArrowsback>
    </View>
  );
}
