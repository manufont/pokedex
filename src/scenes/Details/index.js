import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "./actions";
import "./style.css";

class Details extends Component {
  componentWillMount() {
    const { details, actions, match } = this.props;
    if (!details.loaded) {
      actions.loadPokemonDetails(match.params.id);
    }
  }

  render() {
    return (
      <div>
        Details goes here
      </div>
    );
  }
}

const mapStateToProps = state => ({
  details: state.details
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
