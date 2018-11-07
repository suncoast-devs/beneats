import React from "react";
import RestaurantList from "./RestaurantList";

const Home = () => (
  <>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">benEATS</h1>
          <h2 className="subtitle">A fine directory of restaurants.</h2>
        </div>
      </div>
    </section>
    <RestaurantList />
  </>
);

export default Home;
