import Amplify, { API } from "aws-amplify";
import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)

export const createPerson = async (input) => {
  console.log(input)
    return await API.graphql({
      query: mutations.createPerson,
      variables: { input: input }
    })
}

export const listPersons = async (input) => {
  console.log(input)
    return await API.graphql({
      query: queries.listPersons,
    })
}
