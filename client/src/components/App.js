import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import RestaurantDetail from "./RestaurantDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  <Link to="/">benEATS</Link>
                </h1>
                <h2 className="subtitle">A fine directory of restaurants.</h2>
              </div>
            </div>
          </section>
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
