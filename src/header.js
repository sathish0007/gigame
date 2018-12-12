import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Store/Action";
import "./header.css";

class Header extends Component {
  state = {
    category: ""
  };
  queryData = data => {
    console.log(data);
    let url = "https://www.storenvy.com/search/products.json?category=mens";
    let catUrl = `${url}-${data}`;
    this.setState({
      category: data
    });
    this.props.categoryData(catUrl);
  };
  render() {
    console.log(this.props);
    const { filter } = this.props;
    let filterHead;
    {
      filter
        ? (filterHead = (
            <button onClick={() => this.props.filterChange()}>
              HIDE FILTERS
            </button>
          ))
        : (filterHead = (
            <button onClick={() => this.props.filterChange()}>
              SHOW FILTERS
            </button>
          ));
    }
    return (
      <div className="content-header">
        <div>
          <ul className="hide">
            <li>{filterHead}</li>
          </ul>
        </div>
        <div>
          <h1>Mens -{this.state.category}</h1>
        </div>
        <div>
          <ul className="men-button">
            <li>
              <button className="men-dropdown"> MEN'S </button>
              <ul className="listitem">
                <li onClick={e => this.queryData("accessories")}>
                  Accessories
                </li>
                <li onClick={() => this.queryData("bottoms")}>Bottoms</li>
                <li onClick={() => this.queryData("outerwear")}>OuterWear</li>
                <li onClick={() => this.queryData("shirts")}>Shirts</li>
                <li onClick={() => this.queryData("underthings")}>
                  Underthings
                </li>
                <li onClick={() => this.queryData("shoes")}>Shoes</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.data.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryData: url => dispatch(actions.categoryData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
