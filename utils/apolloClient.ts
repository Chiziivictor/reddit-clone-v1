import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://schneverdingen.stepzen.net/api/virtuous-echidna/__graphql",
  headers: {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
