const assert = require('assert');
const { get } = require('http');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (retorno) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return retorno(userToReturn)
};

getUser(userFullName)
getUser(userNationality)

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich");
assert.strictEqual(getUser(userNationality), "Ivan is Russian");

console.log(`
${getUser(userFullName)}
${getUser(userNationality)}
`)