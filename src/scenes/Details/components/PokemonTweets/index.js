import React, { Component } from "react";
import PropTypes from "prop-types";
import Linkify from "react-linkify";

import "./style.css";
import { LabelledDiv } from "components";
import { formatDate, formatName } from "utils";

class PokemonTweets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldBeLoaded: false,
      tweets: []
    };
  }

  componentWillMount() {
    const socket = new WebSocket(
      `ws://localhost:3000/tweets?keyword=${this.props.pokemonName}`
    );
    socket.onerror = error => {
      console.error(
        "Cannot establish connection with tweets socket server. Is it running ?"
      );
    };
    socket.onmessage = event => {
      this.onTweetsReceive(JSON.parse(event.data));
    };
    socket.onclose = event => {
      console.error(
        "Twitter stream closed unexpectedly. Is the tweets socket server running ?"
      );
    };
    this.socket = socket;

    setTimeout(this.markAsLoaded, 1000);
  }

  markAsLoaded = () => {
    if (this._isMounted && !this.state.shouldBeLoaded) {
      this.setState({
        shouldBeLoaded: true
      });
    }
  };

  onTweetsReceive = tweets => {
    this.setState({
      shouldBeLoaded: true,
      tweets: [...tweets, ...this.state.tweets]
    });
  };

  onSocketClose = event => {
    console.error(event);
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    delete this._isMounted;
    this.socket.onclose = function() {};
    this.socket.close();
  }

  render() {
    const { pokemonName, hide } = this.props;
    const { tweets, shouldBeLoaded } = this.state;

    return (
      !hide && (
        <div className="content-unveiled">
          <LabelledDiv label="Tweets">
            <div className="tweets">
              {shouldBeLoaded &&
              tweets.length === 0 && (
                <span className="content-unveiled">
                  No tweets were found for {formatName(pokemonName)}
                </span>
              )}
              {tweets.map((tweet, index) => (
                <LabelledDiv
                  key={index}
                  label={formatDate(new Date(tweet.datetime))}
                >
                  <Linkify properties={{ className: "tweet-link" }}>
                    {tweet.text}
                  </Linkify>
                </LabelledDiv>
              ))}
            </div>
          </LabelledDiv>
        </div>
      )
    );
  }
}

PokemonTweets.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired
};

export default PokemonTweets;
