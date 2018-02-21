import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Test from './test';
import Client from 'shopify-buy';
import './app.css';

const client = Client.buildClient({
  domain: 'sas-iskn.myshopify.com',
  storefrontAccessToken: '04e570154597e38f81f17d15e81a9181',
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        exact
        name="index"
        path="/"
        render={() => <App client={client}/>}
      />
      <Route path="/test" component={Test} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
