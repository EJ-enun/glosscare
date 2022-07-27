import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Users {
  PATIENT = "PATIENT",
  MEDPERSONNEL = "MEDPERSONNEL"
}

export enum AccountType {
  PATIENT = "PATIENT",
  DOCTOR = "DOCTOR",
  PHARMACIST = "PHARMACIST",
  NURSE = "NURSE",
  HMO = "HMO",
  THERAPIST = "THERAPIST"
}



type UserTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserType {
  readonly id: string;
  readonly userType?: Users | keyof typeof Users | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserType, UserTypeMetaData>);
  static copyOf(source: UserType, mutator: (draft: MutableModel<UserType, UserTypeMetaData>) => MutableModel<UserType, UserTypeMetaData> | void): UserType;
}

export declare class Account {
  readonly id: string;
  readonly AccountType?: AccountType | keyof typeof AccountType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Account, AccountMetaData>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account, AccountMetaData>) => MutableModel<Account, AccountMetaData> | void): Account;
}