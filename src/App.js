import React from 'react'
import './App.css'
import {Route, Switch, useLocation} from 'react-router-dom';

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function App() {

  const routerLocation = useLocation();

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Search'
    },
    {
      pageLink: '/restaurant/:id',
      view: Restaurant,
      displayName: 'Restaurant'
    }
  ];

  return (
    <Switch location={routerLocation}>
        {pages.map((page, index) => {
          return (
            <Route
              exact
              path={page.pageLink}
              render={({match}) => <page.view />}
              key={index}
            />
          );
        })}
    </Switch>
  );
}

export default App;
