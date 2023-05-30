import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const initValue = { firstName: ' ', lastName: ' ', countryName: ' ', gender: ' ', comments: '' }
export default function Card() {
  const customWidth = {
    width: '18rem'
  }

  const [state, setState] = useState(initValue)
  const handlevalue = (e) => {
    const { name, value } = e.target
    setState(s => ({ ...s, [name]: value }))

  }
  const handleSubmit = () => {
    let { firstName, lastName, countryName, gender, comments } = state

    let data = {
      firstName, lastName, countryName, gender, comments,
      id: Math.random().toString(36).slice(2),
      status: 'Active',
      dateCreated: new Date().getTime()
    }

    console.log('data', data)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-5" style={customWidth}>
              <div className="card-body">
                <h5 className="card-title text-center">React Tutorial</h5>
                <p className="card-text text-center">All videos available on official website plz complete videos watch and step by step every point .</p>
                <div className='text-center'>
                  <button className="btn btn-danger">More Information</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5" style={customWidth}>
              <div className="card-body">
                <h5 className="card-title text-center">All Free Course Avil </h5>
                <p className="card-text text-center">All Course available at C43H+Q4P, National Colony Dhuddi Wala, Faisalabad, Punjab .</p>
                <div className='text-center'>
                  <button className="btn btn-info">More Detail</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-5" style={customWidth}>
              <div className="card-body">
                <h5 className="card-title text-center whatsapp-color">Whatsapp Contact</h5>
                <p className="card-text text-center ">Any Information/query at your mind plz contact me with whatsapp number.</p>
                <div className='text-center'>
                  <Link to='https://wa.me/3057471443' target='_blank'>
                    <button className="btn btn-success" >Contact me</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
      <div className="container-fluid form-backGround mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="form-floating mb-3">
                <input type="name" className="form-control" name='firstName' id="floatingInput" placeholder="name" onChange={handlevalue} />
                <label htmfor="floatingInput">First Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input type="name" className="form-control" id="floatingname" placeholder="name" name='lastName' onChange={handlevalue} />
                <label htmfor="floatingPassword">Last Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input type="name" className="form-control" id="floatingPassword" placeholder="name" name='countryName' onChange={handlevalue} />
                <label htmfor="floatingPassword">Country</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input type="name" className="form-control" name='gender' id="floatingPassword" placeholder="name" onChange={handlevalue} />
                <label htmfor="floatingPassword">Gender</label>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name='comments' onChange={handlevalue} ></textarea>
                <label htmfor="floatingTextarea">Comments</label>
              </div>
            </div>
            <div className='text-center mt-3'>
              <button className="btn btn-lg btn-danger" onClick={handleSubmit}>Submit info</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13617.612244381007!2d73.07593305!3d31.430568899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1685430086485!5m2!1sen!2s" className='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
