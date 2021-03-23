/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPerson = `mutation CreatePerson(
  $input: CreatePersonInput!
  $condition: ModelPersonConditionInput
) {
  createPerson(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
  }
}
`;
export const updatePerson = `mutation UpdatePerson(
  $input: UpdatePersonInput!
  $condition: ModelPersonConditionInput
) {
  updatePerson(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
  }
}
`;
export const deletePerson = `mutation DeletePerson(
  $input: DeletePersonInput!
  $condition: ModelPersonConditionInput
) {
  deletePerson(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
  }
}
`;
