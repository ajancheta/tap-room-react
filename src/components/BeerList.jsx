import React from 'react';
import Background from '../assets/img/wood-bg.jpeg';

function BeerList() {
  return (
    <div className="beerlist-background">
      <style jsx>{`
        .beerlist-background {
          background-image: url(${Background});
          position: absolute;
          width: 100vw;
          height: 100vh;
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
      
      `}</style>

      <h1>Available Brew</h1>

    </div>
  );
}

export default BeerList;