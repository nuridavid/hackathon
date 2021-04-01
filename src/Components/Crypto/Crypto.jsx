import React, { Component } from "react";
import axios from "axios";
const url = "https://api.coingecko.com/api/v3/search/trending";
export default class Crypto extends Component {
  state = { crypto: [] };
  componentDidMount() {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({ crypto: res.data.coins });
        console.log(this.state.crypto);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        {this.state.crypto.map((info, i) => {
          return (
            <div>
              <div>
                <h1>{info.item.name}</h1>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
