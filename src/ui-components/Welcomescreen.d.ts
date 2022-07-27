/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Account } from "../models";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type WelcomescreenProps = React.PropsWithChildren<Partial<ViewProps> & {
    account?: Account;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Welcomescreen(props: WelcomescreenProps): React.ReactElement;
