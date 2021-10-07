const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { mongoDB } = require("./secret");

const typeDefs = gql`
  type Query {
    saySomethingFunc: String!
  }
`;

const resolvers = {
  Query: {
    saySomethingFunc: () => {
      return "I am welcome message being sent from the backend";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => {
    console.log(`MongoDB connected...................`);
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server is running at port ${res.url}`);
  });
