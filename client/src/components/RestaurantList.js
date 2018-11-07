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
    fetch(`/api/restaurants?query=${query}`)
      .then(r => r.json())
      .then(restaurants => {
        this.setState({ restaurants });
      });
  };

  render() {
    return (
      <>
        <div className="search">
          <input type="search" onChange={this.search} />
        </div>
        <ul>
          {this.state.restaurants.map(r => (
            <li key={r.id}>
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">
                    <Link to={`/restaurants/${r.id}-${r.slug}`}>{r.name}</Link>
                  </p>
                  <span className="card-header-icon">
                    {"$".repeat(r.budget)}
                  </span>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p>{r.location}</p>
                    <Link to={`/categories/${r.category.slug}`}>
                      {r.category.name}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default RestaurantList;
