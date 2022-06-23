import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { apolloClient } from "./lib/apollo";
import { EventPage } from "./pages/EventPage";
import { RoutesPage } from "./pages/RoutesPage";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <RoutesPage />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
