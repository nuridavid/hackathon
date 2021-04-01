import React, { Component } from "react";
import axios from "axios";
const url = "https://api.coingecko.com/api/v3/search/trending";
export default class Home extends Component {
  state = { home: [] };
  componentDidMount() {
    axios.get(url).then((res) => this.setState(res.data));
  }
  render() {
    return (
      <div>
        <h1>home</h1>
      </div>
    );
  }
}
