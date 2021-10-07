const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

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

server.listen({ port: 5000 }).then((res) => {
  console.log(`server is running at port ${res.url}`);
});
