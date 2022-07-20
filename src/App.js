import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection, Grid, useTheme, Button, Flex, Image, Rating, Text } from "@aws-amplify/ui-react";

import {
  withAuthenticator,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Icon } from '@aws-amplify/ui-react';
function App(props, { signOut }) {
  const doctor = [{ name:"Consultant"}, {name:"Surgeon"}, {name:"Cardiologist"}];
  const { tokens } = useTheme();
  const { overrides, ...rest } = props;
  return (
    <View className="App">
      <Flex
      gap="0"
      direction="column"
      justifyContent="center"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ActionCard")}
    >
      <Collection
      type="list"
      direction="row"
      justifyContent="space-between"
      templateColumns="1fr 1fr 1fr"
      gap="20px"
      items={Object.values(doctor).map(({name}) => ({
        name,
      }))}
      itemsPerPage={3}
      
    >
      {(item, index) => (
        <Button grow="1" key={index}>
          <Div>{item.name}</Div><Div><Br/><Icon
      ariaLabel="tag"
      viewBox={{ width: 23, height: 15 }}
      paths={[
        {
          d: 'M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1V14C0.5 14.2761 0.723858 14.5 1 14.5H14C14.1148 14.5 14.2262 14.4605 14.3153 14.3881L22.3153 7.88806C22.4322 7.79311 22.5 7.65056 22.5 7.5C22.5 7.34944 22.4322 7.20689 22.3153 7.11194L14.3153 0.611943C14.2262 0.539529 14.1148 0.5 14 0.5H1Z',
          strokeLinejoin: 'bevel',
          strokeLinecap: 'round',
          strokeDasharray: '4 4',
          fill: 'transparent',
          stroke: 'currentColor',
        },
      ]}
    /></Div></Button>
      )}
      
    </Collection>
      <Image
        height="408px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Classic Long Sleeve T-Shirt"
            {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product"
            {...getOverrideProps(overrides, "Information about this product")}
          ></Text>
        </Flex>
        <Rating
          display="flex"
          gap="8px"
          direction="row"
          width="174px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="default"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="$99 USD"
          {...getOverrideProps(overrides, "$99 USD")}
        ></Text>
        <Button
          display="flex"
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Primary Button"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
    </View>
  );
}

export default withAuthenticator(App);
