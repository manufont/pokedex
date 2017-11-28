import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const LabelledDiv = ({ label, children }) => {
  return (
    <div className="details-line">
      <div className="details-line-label">{label}</div>
      <div className="details-line-children">{children}</div>
    </div>
  );
};

LabelledDiv.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default LabelledDiv;
