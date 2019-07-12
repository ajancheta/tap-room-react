import React from 'react';
import Background from '../assets/img/wood-bg.jpeg';
import PropTypes from 'prop-types';
import Beer from './Beer';
import Nav from './Nav';

function BeerList(props) {
  return (
    <div className="beerlist-background">
      <Nav />
      <style jsx>{`

        .beerlist-background {
          background-image: url(${Background});
          position: absolute;
          width: 100vw;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .title {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 800;
          color: #ECE5D6;
          text-align: center;
          font-size: 3em;
          letter-spacing: 5px;
          margin-top: 7%;
        }

        .beer-details-container {
          font-family: 'Montserrat', sans-serif;
          color: #ECE5D6;
          display: grid;
          grid-template-columns: auto auto auto auto;
          margin: 10%;
          background-color: #213458;
          opacity: 0.95;
        }

      `}</style>

      <h1 className="title">Brews on Tap</h1>
      <div className="beer-details-container">
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