import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../assets/img/background.jpg';
import ArrowDown from '../assets/img/arrow-down.svg';
import ArrowLeft from '../assets/img/arrow-left.svg';
import ArrowRight from '../assets/img/arrow-right.svg';


function Splash() {
  return (
    <div className="splash-background">
      <style jsx>{`
        .splash-background {
          background-image: url(${Background});
          position: absolute;
          width: 100vw;
          height: 100vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        h3 {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 800;
          color: #ECE5D6;
        }

        .splash-button-container {
          margin-top: 15%;
          display: flex;
          justify-content: center;
        }

        .splash-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 50%;
        }

        .read-button-container {
          display: flex;
          justify-content: center;
        }

        .read-button {
          width: 20%;
          text-align: center;
          margin-top: 5%;
        }

        img:hover {
          cursor: pointer;
        }
      `}</style>

      <div className="splash-button-container">
        <div className="splash-button">
          <div>
            <Link to="/beerlist"><img src={ArrowLeft} /></Link>
            <h3>Beer List</h3>
          </div>

          <div>
            <Link to="/admin"><img src={ArrowRight} /></Link>
            <h3>Admin</h3>
          </div>
        </div>
      </div>

      <div className="read-button-container">
        <div className="read-button">
          <h3>Read on</h3>
          <Link to="/about"><img src={ArrowDown} /></Link>
        </div>
      </div>

    </div>

  );
}

export default Splash;