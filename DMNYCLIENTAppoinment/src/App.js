import React from "react";
import "./styles.css";
import logo from "./logo.png";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import { ApolloClient, InMemoryCache , ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://salty-brook-71006.herokuapp.com/graphql',
  cache: new InMemoryCache()
});
export default function App() {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="App">
        <img src={logo} alt="Logo" className="main-logo" />
        <h1 className="Title">Consulado Dominicano en la Ciudad de Nueva York</h1>
        <Route exact path="/" component={Landing} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/consultas" component={null} />
      </div>
    </BrowserRouter>
    </ApolloProvider>
  );
}
