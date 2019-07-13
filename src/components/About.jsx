import React from 'react';
import Background from '../assets/img/wood-bg.jpeg';
import Nav from './Nav';
import Mushroom from '../assets/img/mushroom.svg';
import Sustainability from '../assets/img/sustainability.svg';

function About() {
  return (
    <div className="about-background">
      <style jsx>{`
        .about-background {
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

      .about-container {
        padding: 10px;
        font-family: 'Montserrat', sans-serif;
        color: #ECE5D6;
        margin: 8%;
        background-color: #c24a19;
        opacity: 0.95;
        display: flex;
        font-size: 20px;
        align-items: center;
      }

      img {
        width: 150px;
        height: 150px;
      }

      .text {
        text-align: justify;
        padding: 10px;
      }
      
      `}</style>

      <Nav />
      <h1 className="title">The Forager's Ale House</h1>
      <div className="about-container">
        <div className="media-container">
          <img src={Mushroom} />
        </div>
        <div className="text">
          <p>The Forager's Ale House is the resource for elevating spirits through liquid love. We celebrate the unadulterated, exquisite flavors to help connect people to finding true joy and liberation.</p>
        </div>
      </div>
      <div className="about-container">
        <div className="text">
          <p>Here at the The Forager's Ale House Company, we know the future of Mother Earth depends on the way that we treat her. So we brew our beer sustainably, using solar energy to power our Big Island brewery, on-site gardens to recycle our water, and even leftover grains to bake into our pizza crust for the Curious Cubenis brewpub. We think the earth is pretty great. Let’s keep it that way! <br /><br />

          We also love giving back to our community by supporting local organizations that display an authentic, innovative approach to their mission and objectives that match up with our internal values. In-kind donation requests are reviewed by a team of brewery employees.</p>
        </div>
        <div className="media-container">
          <img src={Sustainability} />
        </div>
      </div>
    </div>
  );
}

export default About;