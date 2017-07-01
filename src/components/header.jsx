import React, { Component } from "react";
import Search from "./search";

class Header extends Component {
  state = {
    mSearchFocused: false
  };
  toggleFocus = () => {
    this.setState({ mSearchFocused: !this.state.mSearchFocused });
  };

  render() {
    return (
      <header className="nav site-header">
        <div className="container">
          <div
            className={
              "nav-left nav-menu" +
              (this.state.mSearchFocused ? " is-hidden-mobile" : "")
            }
          >
            <a className="nav-item">Home</a>
            <a className="nav-item is-active">Blog</a>
            <a className="nav-item">Contacts</a>
          </div>
          <div className="nav-right">
            <a className="nav-item">
              <Search onMobileSearchToggle={this.toggleFocus} />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
