import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import RestaurantDetail from "./RestaurantDetail";
import NavBar from "./NavBar";
import Loading from "./Loading";
import Auth from "../Auth";
import history from "../history";

const auth = new Auth();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <>
          <NavBar auth={auth} />
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
            <Route
              path="/callback"
              render={props => {
                if (/access_token|id_token|error/.test(props.location.hash)) {
                  auth.handleAuthentication();
                }
                return <Loading {...props} />;
              }}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
