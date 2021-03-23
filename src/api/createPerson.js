import { API } from "aws-amplify";
import * as mutations from "../graphql/mutations"

const createPerson = async (firstName, lastName, email) => {
  return await Promise.resolve(API.graphql({
    query: mutations.createPerson,
    input: { firstName: firstName, lastName: lastName, email: email },
    authMode: "AWS_IAM",
  }))
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
    throw err;
  });
}

export default {
  createPerson: createPerson
}
