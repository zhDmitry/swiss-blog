import React, { Component } from "react";
import Header from "./components/header.jsx";
import Blogs from "./components/blog-container.jsx";
import Footer from "./components/footer.jsx";

class App extends Component {
  render() {
    return (
      <div className="site-container">
        <Header />
        <div className="site-content">
          <div className="section blog-title">
            <div className="container">
              <p className="title is-3 has-text-centered">Blog</p>
            </div>
          </div>
          <Blogs />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
