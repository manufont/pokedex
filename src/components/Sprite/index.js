import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Sprite = ({ alt, url }) => {
  const coverStyle = {
    backgroundImage: `url(${url})`
  };
  return (
    <div className="sprite">
      <div className="background-cover" style={coverStyle} />
      <img className="sprite-image" alt={alt} src={url} />
    </div>
  );
};

Sprite.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Sprite;
