/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPerson = `query GetPerson($id: ID!) {
  getPerson(id: $id) {
    id
    firstName
    lastName
    email
  }
}
`;
export const listPersons = `query ListPersons(
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
    }
    nextToken
  }
}
`;
