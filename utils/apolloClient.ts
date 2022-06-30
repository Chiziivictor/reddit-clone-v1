import { ApolloClient, InMemoryCache } from "@apollo/client";

// const uri = "https://schneverdingen.stepzen.net/api/virtuous-echidna/__graphql";
const uri = "http://localhost:5001/api/virtuous-echidna";

const client = new ApolloClient({
  uri: uri,
  headers: {
    "Content-Type": "application/json",
    Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
