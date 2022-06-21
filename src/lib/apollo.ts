import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7reel0zyy01z766uo2l3x/master',
  cache: new InMemoryCache(),
});
