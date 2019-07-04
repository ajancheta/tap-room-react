import React from 'react';
import Background from '../assets/img/background.jpg';

function Splash() {
  return (
    <div className ="splash-background">
      <style jsx>{`
        .splash-background {
          width: 100vw;
          height: 100vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(${Background});
        }

        .flex {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 20%;
        }

        h3 {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
        }

        .list {
          
        }

        .admin {

        }

        .read {

        }
        
      `}</style>

      <div className="flex">
        <div className="list">
          <h3>Beer List</h3>
        </div>

        <div className="admin">
          <h3>Admin</h3>
        </div>

      </div>

        <div className="read">
          <h3>Read on</h3>
        </div>

    </div>

  );
}

export default Splash;