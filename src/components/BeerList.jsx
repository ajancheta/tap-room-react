import React from 'react';
import Background from '../assets/img/beerlist-background.jpeg';

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
      
      `}</style>

    </div>
  )
}

export default BeerList;