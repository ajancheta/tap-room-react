import React from 'react';
import Background from '../assets/img/wood-bg.jpeg';
import PropTypes from 'prop-types';
import Beer from './Beer';

function BeerList(props) {
  return (
    <div className="beerlist-background">
      <style jsx>{`

        .beerlist-background {
          background-image: url(${Background});
          position: absolute;
          width: 100vw;
          // height: 100vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        h1 {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 800;
          color: #ECE5D6;
          text-align: center;
          letter-spacing: 5px;
        }

        .beer-details {
          font-family: 'Montserrat', sans-serif;
          color: #ECE5D6;
          padding: 10px;
        }
      
      `}</style>
      
      
      <div className="beer-details">
        {props.beerList.map(beer => (
          <Beer
            name={beer.name}
            style={beer.style}
            description={beer.description}
            ABV={beer.ABV}
            key={beer.id}
          />
        ))}
      </div>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;