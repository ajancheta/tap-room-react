import React from 'react';
import Background from '../assets/img/wood-bg.jpeg';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Nav from './Nav';

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

        input {
          padding: 20px;
          width: 50%;
          margin: 2px;
          font-size: 14px;
        }

        textarea {
          padding: 20px;
          width: 50%;
          margin: 2px;
          font-size: 14px;
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

        button{
          padding: 20px;
          color: white;
          background-color: #213458;
          width: 30%;
          border: 1px solid #213458;
          border-radius: 10px;
          margin-top: 2%;
          font-size: 16px;
        }

        .beer-form {
          margin-top: 5%;
          text-align: center;
        }
      
      `}</style>

      <Nav />
      <div className="title">
        New Beer Form
      </div>

      <div className="beer-form">
        <form onSubmit={handleNewBeerSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}}/>
          <input
            type='text'
            id='style'
            placeholder='Style'
            ref={(input) => {_style = input;}}/>
          <textarea
            type='text'
            id='description'
            placeholder='Description'
            ref={(textarea) => {_description = textarea;}}/>
          <input
            type='text'
            id='ABV'
            placeholder='ABV %'
            ref={(input) => {_ABV = input;}}/><br />
          <button type='submit'>Add Brew</button>
        </form>
      </div>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerAddition: PropTypes.func
};

export default NewBeerForm;