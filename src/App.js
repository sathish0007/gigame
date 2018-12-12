import React, { Component } from "react";
import "./App.css";
import Data from "./data";
import Header from "./header.js";
import SideContent from "./sidecontent.js";

class App extends Component {
  state = {
    filter: true
  };
  filterChange = () => {
    this.setState({
      filter: !this.state.filter
    });
  };
  render() {
    return (
      <div className="App">
        <Header filter={this.state.filter} filterChange={this.filterChange} />
        <div className="main-content">
          <SideContent
            filter={this.state.filter}
            filterChange={this.filterChange}
          />
          <Data />
        </div>
      </div>
    );
  }
}

export default App;
