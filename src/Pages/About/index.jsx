import React from 'react'
import themeForest from '../../Assets/Images/ThemeForest.webp';

export default function index() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <img src={themeForest} className='img-fluid' alt="themeForest" />
          <div className="about-section">
            <h2 className='text-center pt-3'>About Section Here</h2>
            <p  className='text-center pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae modi necessitatibus, provident neque aperiam, molestias, alias ipsam minus blanditiis optio. Illum deserunt quasi eum, libero nostrum cupiditate at! Dolorum.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
