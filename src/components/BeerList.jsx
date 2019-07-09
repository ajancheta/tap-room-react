import React from 'react';
import Background from '../assets/img/wood-bg.jpeg';
import PropTypes from 'prop-types';

function BeerList(props) {
  return (
    <div className="beerlist-background">
      <style jsx>{`

        // .beerlist-background {
        //   background-image: url(${Background});
        //   position: absolute;
        //   width: 100vw;
        //   height: 100vh;
        //   background-size: cover;
        //   background-position: center;
        //   background-repeat: no-repeat;
        // }
        
        h1 {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 800;
          color: #ECE5D6;
          text-align: center;
          letter-spacing: 5px;
        }

        .beer-details {
          border: 1px solid red;
          font-family: 'Montserrat', sans-serif;
          color: #ECE5D6;
          padding: 10px;
        }
      
      `}</style>
      
      
      <div className="beer-details">
        <h2>{props.name} | {props.style}</h2>
        <p>{props.description}</p>
        <p>{props.ABV}%</p>
        <hr />
      </div>
    
    </div>
  );
}

BeerList.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ABV: PropTypes.string.isRequired,
};

export default BeerList;