import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Store/Action";
import "./data.css";

class Data extends Component {
  constructor() {
    super();
    console.log(`constructor`);
  }

  componentDidMount() {
    console.log(` cdm`);
    this.props.getData();
  }

  render() {
    console.log(this.props);
    let userList = this.props.fetch.map((item, i) => {
      console.log(item);
      return (
        <div key={i} className="card">
          <img src={item.photo.url} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{item.name}</b>
            </h4>
            <p>{item.store.name.toUpperCase()}</p>
          </div>
        </div>
      );
    });
    return <div>{userList}</div>;
  }
}

const mapStateToProps = state => {
  console.log(`msp`);
  console.log(state);
  return {
    fetch: state.data.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actions.fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);
