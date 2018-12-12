import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "./Store/Action";
import "./sidecontent.css";

class SideContent extends Component {
  state = {
    editors_picks: false,
    on_sale: false,
    filter: true
  };
  checkboxValueChange = async ({ target }) => {
    console.log(target.name, target.value);

    let url = this.props.url;
    console.log(url);
    if (target.name === "on_sale") {
      console.log(this.state);

      await this.setState({
        [target.name]: !this.state.on_sale
      });
      // let filterurl = `${url}&on_sale=${!this.state.on_sale}&editors_picks=${
      //   this.state.editors_picks
      // }`;
      // this.props.filteredData(filterurl);
    } else {
      console.log(this.state);
      await this.setState({
        [target.name]: !this.state.editors_picks
      });
    }
    const { editors_picks, on_sale } = this.state;
    let filterurl = "";
    switch (true) {
      case editors_picks === false && on_sale === false:
        this.props.filteredData(url);
        break;
      case editors_picks === true && on_sale === false:
        filterurl = `${url}&editors_picks=true`;
        this.props.filteredData(filterurl);

        break;
      case editors_picks === true && on_sale === true:
        filterurl = `${url}&on_sale=true&editors_picks=true`;
        this.props.filteredData(filterurl);

        break;
      case editors_picks === false && on_sale === true:
        filterurl = `${url}&on_sale=true`;
        this.props.filteredData(filterurl);

        break;

      default:
        break;
    }
  };
  componentWillReceiveProps(props) {
    console.log(props.url);
    console.log(this.props.url);
    if (props.url !== this.props.url) {
      this.setState({
        editors_picks: false,
        on_sale: false
      });
    }
  }
  render() {
    console.log(this.props);
    let datalistoption = this.props.productData.map((item, i) => {
      console.log(item);
      return (
        <option key={i} value={item.name}>
          {item.name}
        </option>
      );
    });
    return (
      <div className={this.props.filter ? "side-content" : "side-content hide"}>
        <h2 className="search-text"> Search </h2>
        <div>
          <form>
            <input type="text" list="datalist" placeholder="search product" />
            <datalist id="datalist">{datalistoption}</datalist>
          </form>
        </div>
        <h2 className="show-only"> Show Only</h2>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="editors_picks"
              checked={this.state.editors_picks}
              value={this.state.editors_picks}
              onChange={this.checkboxValueChange}
            />
            Editor's Picks
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="on_sale"
              checked={this.state.on_sale}
              value={this.state.on_sale}
              onChange={this.checkboxValueChange}
            />
            On Sale
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(`msp`);
  console.log(state);
  return {
    url: state.data.url,
    productData: state.data.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filteredData: url => dispatch(actions.filteredData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideContent);
