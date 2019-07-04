import React from 'react';
import BackgroundPhoto from './../assets/img/channey-2.jpg';

function Splash() {
  return (
    <div>
      <style jsx>{`
        div {
          background-image: url(${BackgroundPhoto});
        }
      `}</style>

    </div>

  );
}

export default Splash;