import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  return (
    <div>
      <style jsx>{`
      .beer-details {

      }
      `}</style>
      <div className="beer-details">
        <h2>{props.name} | {props.style}</h2>
        <p>{props.description}</p>
        <p>{props.ABV}%</p>
        <hr/>
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