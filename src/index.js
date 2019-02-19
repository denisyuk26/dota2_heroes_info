import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeroesListContainer from "./containers/HeroesListContainer";
import HeroPageContainer from "./containers/HeroPageContainer";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={HeroesListContainer}/>
        <Route exact path='/hero/:id' component={HeroPageContainer} />
      </Switch>
    </HashRouter>
  </Provider>,

  document.getElementById("root")
);
