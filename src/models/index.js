// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Users = {
  "PATIENT": "PATIENT",
  "MEDPERSONNEL": "MEDPERSONNEL"
};

const AccountType = {
  "PATIENT": "PATIENT",
  "DOCTOR": "DOCTOR",
  "PHARMACIST": "PHARMACIST",
  "NURSE": "NURSE",
  "HMO": "HMO",
  "THERAPIST": "THERAPIST"
};

const { UserType, Account } = initSchema(schema);

export {
  UserType,
  Account,
  Users,
  AccountType
};