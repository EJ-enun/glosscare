import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection, Grid, useTheme, Button, Flex, Image, Rating, Text, Theme, ThemeProvider } from "@aws-amplify/ui-react";

import {
  withAuthenticator,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Icon } from '@aws-amplify/ui-react';
function App(props, { signOut }) {
  const doctor = [{ name:"Consultant"}, {name:"Surgeon"}, {name:"Cardiologist"}];
  const account_types = [{account_name:"Patient", text:"Register as a patient"}, {account_name:"HMO", text:"Register as a HMO"}, {account_name:"Therapist", text:"Register as a Therapist"}, {account_name:"Pharmacy", text:"Register store"}, {account_name:"Nurse", text:"Register as a Nurse"}]
  const { tokens } = useTheme();
  const { overrides, ...rest } = props;
  const theme: Theme = {
    
  name: 'card-theme',
  tokens: {
    components: {
      card: {
        // You can reference other tokens
        backgroundColor: { value: '{colors.background.success}' },
        borderRadius: { value: '{radii.large}' },
        padding: { value: '{space.xl}' },

        // Variations
        outlined: {
          // Or use explicit values
          borderWidth: { value: '10px' },
          backgroundColor: { value: '{colors.background.warning}' },
        },
        elevated: {
          backgroundColor: { value: '{colors.background.success}' },
          boxShadow: { value: '{shadows.large}' },
        },
      },
    },
  },  
  name: 'button-theme',
  tokens: {
    colors: {
      border: {
        // this will affect the default button's border color
        primary: { value: 'black' },
      },
    },
    components: {
      button: {
        // this will affect the font weight of all button variants
        fontWeight: { value: '{fontWeights.extrabold}' },
        // style the primary variation
        primary: {
          backgroundColor: { value: '{colors.blue.60}' },
          _hover: {
            backgroundColor: { value: '{colors.blue.80}' },
          },
          _focus: {
            backgroundColor: { value: '{colors.blue.80}' },
          },
          _active: {
            backgroundColor: { value: '{colors.blue.90}' },
          },
        },
      },
    },
  },
};
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
      <Text  padding="10px 10px 10px 10px" variation="tertiary">Choose your account type</Text>
      <Collection
      type="list"
      direction="row"
      wrap="wrap"
      padding="10px 10px 10px 10px"
      justifyContent="space-between"
      templateColumns="1fr 1fr 1fr"
      gap="20px"
      items={Object.values(doctor).map(({name}) => ({
        name,
      }))}
      itemsPerPage={3}
      
    >
      {(item, index) => (
       
      <Button variation="primary" grow="1" key={index}>
          <div>{item.name}</div><br/><Icon
      ariaLabel="Camera"
      viewBox={{ width: 50, height: 50}}
      pathData="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
 
    /></Button>
    
      )}
      
    </Collection>
      <Collection
      type="list"
      direction="row"
      wrap="wrap"
      justifyContent="space-between"
      templateColumns="1fr 1fr 1fr"
      gap="20px"
      items={Object.values(account_types).map(({account_name, text }) => ({
        account_name, text,
      }))}
      itemsPerPage={3}
      
    >
      {(item, index) => (
        <ThemeProvider theme={theme} colorMode="light">
      <Flex>
       <Card variation="elevated" key={index}>
        <div>{item.text}</div>
        </Card>
      </Flex>
    </ThemeProvider>
        
      )}
      
    </Collection>  
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
          children="Save"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
    </View>
  );
}

export default withAuthenticator(App);

