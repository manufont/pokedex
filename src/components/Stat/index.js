import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.css";
import { LabelledDiv } from "components";

const formatDelta = delta => (delta > 0 ? "+" : "") + delta;

const Stat = ({ label, meanValue, value }) => {
  const delta = value - Math.round(meanValue);
  const green = delta > 0;
  const red = delta < 0;

  return (
    <LabelledDiv className="stat" label={label}>
      {value}{" "}
      {delta !== 0 && (
        <span className={classNames({ green, red })}>{formatDelta(delta)}</span>
      )}
    </LabelledDiv>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  meanValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default Stat;
