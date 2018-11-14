import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

class NavBar extends Component {
  state = {
    isActive: false
  };

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const { isActive } = this.state;
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Logo"
            />
          </a>

          <a
            role="button"
            className={classnames("navbar-burger", "burger", {
              "is-active": isActive
            })}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          className={classnames("navbar-menu", {
            "is-active": isActive
          })}
        >
          <div className="navbar-start">
            <NavLink
              activeClassName="is-active"
              exact
              to="/"
              className="navbar-item"
            >
              Home
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {this.props.auth.isAuthenticated() ? (
                  <button
                    className="button"
                    onClick={() => this.props.auth.logout()}
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="button"
                    onClick={() => this.props.auth.login()}
                  >
                    Log In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
