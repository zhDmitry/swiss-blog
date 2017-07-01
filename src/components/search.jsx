import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <p className="control has-icons-right search">
        <input
          className="input is-hidden-mobile"
          type="text"
          placeholder="Search"
        />
         <input
          className="input is-hidden-tablet mobile-input"
          type="text"
          onFocus={this.props.onMobileSearchToggle}
          onBlur={this.props.onMobileSearchToggle}
          placeholder="Search"
        />
        <span className="icon is-small is-right">
         <i className="material-icons">search</i>
        </span>
      </p>
    );
  }
}

export default Search;
