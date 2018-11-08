import React, { Component } from "react";
import Loading from "./Loading";
import StarRating from "./StarRating";

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
            <section className="hero">
              <div className="hero-body">
                <div className="container">
                  <nav className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <h2 className="title is-2">{restaurant.name}</h2>
                      </div>
                      <div className="level-right" />
                      <div className="level-item">
                        <StarRating number={restaurant.average_rating} />
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <nav className="level">
                  <div className="level-item">
                    <h2 className="subtitle">{restaurant.description}</h2>
                  </div>
                </nav>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <h3 className="title is-3">Reviews</h3>

                {restaurant.reviews.map(review => (
                  <article className="media box" key={review.id}>
                    <figure className="media-left">
                      <p className="image is-64x64">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          alt="Avatar Placeholder"
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <div>
                          <strong>John Smith</strong> <small>31m</small>
                          <p>{review.message}</p>
                        </div>
                      </div>
                    </div>
                    <div className="media-right">
                      <StarRating number={review.rating} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}

export default RestaurantDetail;
