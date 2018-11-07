import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import RestaurantDetail from "./RestaurantDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/restaurants/:id" component={RestaurantDetail} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
