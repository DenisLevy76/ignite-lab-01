import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { apolloClient } from './lib/apollo';
import { EventPage } from './pages/Event';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <EventPage />
    </ApolloProvider>
  </React.StrictMode>
);
