import React from 'react';
import PropTypes from 'prop-types';

function Beer(props) {
  const currentlyOnTap = (
    <div>
      <style jsx>{`
      .beer-container {
        padding: 10px;
        font-family: 'Montserrat', sans-serif;
        color: #ECE5D6;
        margin: 10%;
        background-color: #213458;
        opacity: 0.95;
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

  const editBeerList = (
    <div>
      <style jsx> {`
      .beer-container {
        padding: 10px;
        font-family: 'Montserrat', sans-serif;
        color: #ECE5D6;
        margin: 10%;
        background-color: #213458;
        opacity: 0.95;
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
          <button onClick={() => {
            props.onClickDelete(props.id);
          }}>Delete</button>
        </div>
      </div>
    </div>
  );

  if (props.currentRouterPath === '/admin/edit') {
    return <div>{editBeerList}</div>;
  } else {
    return <div>{currentlyOnTap}</div>;
  }
}


Beer.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  description: PropTypes.string,
  ABV: PropTypes.string
};

export default Beer;