import React, { Component } from "react";
import { Link } from "react-router-dom";

class RestaurantList extends Component {
  state = {
    restaurants: []
  };

  componentDidMount() {
    fetch("/api/restaurants?limit=3")
      .then(r => r.json())
      .then(restaurants => {
        this.setState({ restaurants });
      });
  }

  search = event => {
    const query = event.target.value;
    fetch(`/api/restaurants?limit=3&query=${query}`)
      .then(r => r.json())
      .then(restaurants => {
        this.setState({ restaurants });
      });
  };

  render() {
    return (
      <>
        <div className="section">
          <nav className="level">
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input"
                    type="search"
                    placeholder="Find a restaurant"
                    onChange={this.search}
                  />
                </p>
              </div>
            </div>
          </nav>
        </div>
        <section className="section">
          <div className="container">
            <ul className="restaurant-list">
              {this.state.restaurants.map(r => (
                <li key={r.id} className="restaurant-list-item">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        <Link to={r.client_path}>{r.name}</Link>
                      </p>
                      <span className="card-header-icon">
                        {"$".repeat(r.budget)}
                      </span>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        <p>{r.location}</p>
                        <Link
                          to={`/categories/${r.category.slug}`}
                          className="tag is-link"
                        >
                          {r.category.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>benEats</strong> by{" "}
              <a href="https://github.com/suncoast-devs/cohort-xi">
                Cohort XI Rubyists
              </a>
              . Made with &hearts; in St. Petersburg, FL.
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default RestaurantList;
