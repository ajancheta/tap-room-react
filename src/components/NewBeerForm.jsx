import React from 'react';
import Background from '../assets/img/wood-bg.jpeg';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeerForm(props) {
  let _name = null;
  let _style = null;
  let _description = null;
  let _ABV = null;

  function handleNewBeerSubmission(event) {
    event.preventDefault();
    props.onNewBeerAddition({
      name: _name.value,
      style: _style.value,
      description: _description.value,
      ABV: _ABV.value,
      id: v4()
    });

    _name.value = '';
    _style.value = '';
    _description.value = '';
    _ABV.value = '';
  }

  return (
    <div className="admin-background">
      <style jsx>{`
        .admin-background {
          background-image: url(${Background});
          position: absolute;
          width: 100vw;
          height: 100vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      
      `}</style>
      <div className="title">
        New Beer Form
      </div>

      <div className="beer-form">
        
      </div>
    
    </div>
  );
}

export default NewBeerForm;