/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Welcomescreen(props) {
  const { account, overrides, ...rest } = props;
  const buttonsSlashPrimaryEightEightFiveFourFourSevenZeroOnClick =
    useNavigateAction({ type: "url", url: account?.id });
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Welcomescreen")}
    >
      <Text
        fontFamily="Lato"
        fontSize="36px"
        fontWeight="800"
        color="rgba(58,58,58,1)"
        lineHeight="42.1875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="183px"
        height="36px"
        position="absolute"
        top="469px"
        left="27px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome!"
        {...getOverrideProps(overrides, "Welcome!")}
      ></Text>
      <Text
        fontFamily="Source Sans Pro"
        fontSize="19px"
        fontWeight="400"
        color="rgba(0,0,0,0.7)"
        lineHeight="22.265625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="266px"
        height="61px"
        position="absolute"
        top="532px"
        left="27px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign in to enjoy access to verified medical personnel"
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur"
        )}
      ></Text>
      <View
        width="5px"
        height="2px"
        position="absolute"
        top="85px"
        left="173px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Buttons/Primary8773730")}
      ></View>
      <View
        width="325px"
        height="51px"
        position="absolute"
        top="663px"
        left="27px"
        overflow="hidden"
        border="1px SOLID rgba(196,196,196,1)"
        boxShadow="0px 15px 35px rgba(0, 0, 0, 0.15000000596046448)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        onClick={() => {
          buttonsSlashPrimaryEightEightFiveFourFourSevenZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Buttons/Primary8854470")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons/Primary/Normal")}
        ></View>
      </View>
      <Text
        fontFamily="Lato"
        fontSize="18px"
        fontWeight="500"
        color="rgba(58,58,58,0.9)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="156px"
        height="20px"
        position="absolute"
        top="742px"
        left="74px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ask me again later"
        {...getOverrideProps(overrides, "Ask me again later")}
      ></Text>
      <Icon
        width="57px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 57, height: 1 }}
        paths={[
          {
            d: "M0 0L57 0L57 -1L0 -1L0 0Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="767px"
        left="227px"
        {...getOverrideProps(overrides, "Line 6")}
      ></Icon>
      <Text
        fontFamily="Lato"
        fontSize="18px"
        fontWeight="500"
        color="rgba(58,58,58,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="743px"
        left="224px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=" Sign up"
        {...getOverrideProps(overrides, "Sign up")}
      ></Text>
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
        position="absolute"
        top="218px"
        left="89px"
        {...getOverrideProps(overrides, "Transition")}
      ></Icon>
    </View>
  );
}
