import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
      .beer-container {
        padding: 10px;
      }

      h3 {
        margin-top: -10px;
      }

      `}</style>
      
      <div className="beer-container">
        <div className="beer-details">
          <h2>{props.name}</h2>
          <h3>{props.style}</h3>
          <p>{props.description}</p>
          <p>{props.ABV}%</p>
        </div>
      </div>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  description: PropTypes.string,
  ABV: PropTypes.string
};

export default Beer;