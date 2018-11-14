import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    message: "",
    rating: 0
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const token = window.localStorage.getItem("id_token");

    fetch(`/api/restaurants/${this.props.restaurantId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        review: this.state
      })
    })
      .then(r => r.json())
      .then(data => {
        if (!data.errors) {
          this.props.onCreated();
        } else {
          console.log(data.errors);
        }
      });
  };

  render() {
    return (
      <section className="section">
        <div className="containter">
          <h2 className="title">Leave A Review of Your Own</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="number"
              onChange={this.handleChange}
              value={this.state.rating}
              name="rating"
            />
            <textarea
              onChange={this.handleChange}
              value={this.state.message}
              name="message"
            />
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </section>
    );
  }
}

export default CommentForm;
