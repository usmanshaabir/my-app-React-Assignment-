import React from 'react';
import earthPicture from '../../Assets/Images/Earth.jpg';
import greenPicture from '../../Assets/Images/GreenArea.jpg';
import natureForest from '../../Assets/Images/NatureForest.jpg';

export default function Hero() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={earthPicture} className="d-block w-100 " alt="earthPicture" />
          </div>
          <div className="carousel-item">
            <img src={greenPicture} className="d-block w-100" alt="greenPicture" />
          </div>
          <div className="carousel-item">
            <img src={natureForest} className="d-block w-100" alt="natureForest" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
