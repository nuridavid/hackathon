import React, { Component } from "react";
import axios from "axios";
import "./Crypto.css";
import { Card, Button } from "react-bootstrap";
const url = "https://api.coingecko.com/api/v3/search/trending";
export default class Crypto extends Component {
  state = { crypto: [] };
  componentDidMount() {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({ crypto: res.data.coins });
      })

      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <h1>SeE wHaT's TrEnDiNg</h1>
        {this.state.crypto.map((info, i) => {
          return (
            <div>
              <Card id="crypto__box">
                <Card.Img
                  variant="top"
                  src={info.item.large}
                  className="crypto__img"
                />
                <Card.Body className="crypto__body">
                  <Card.Title>{info.item.name}</Card.Title>
                  <Card.Text id="crypto__box--text">
                    Rank: {info.item.score + 1}{" "}
                    <div>Price: at least two fitty</div>
                  </Card.Text>

                  <Button variant="primary"></Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </>
    );
  }
}
