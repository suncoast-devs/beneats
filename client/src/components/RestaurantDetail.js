import React, { Component } from "react";
import Loading from "./Loading";

class RestaurantDetail extends Component {
  state = {
    loading: true,
    restaurant: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/restaurants/${id}`)
      .then(r => r.json())
      .then(restaurant => {
        this.setState({ restaurant, loading: false });
      });
  }

  render() {
    const { loading, restaurant } = this.state;
    return (
      <>
        {loading && <Loading />}
        {restaurant && (
          <>
            <h2 className="title">{restaurant.name}</h2>
            <p>{restaurant.description}</p>
          </>
        )}
      </>
    );
  }
}

export default RestaurantDetail;
