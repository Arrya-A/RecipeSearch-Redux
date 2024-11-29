import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='row w-100 p-5 bg-warning'>
        <div className="col-md-4">
          <h4 className=' mb-4'><Link to='/' style={{textDecoration:'none', color:'black'}}><i class="fa-solid fa-bowl-rice me-2"></i>Cook Book</Link></h4>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur neque culpa nostrum eveniet quibusdam reiciendis cum, mollitia nulla praesentium, hic repudiandae, nisi aliquam fuga aperiam maxime expedita? Molestias, repellat quisquam?</p>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center">
          <div>
            <h4 className='mb-4'>Links</h4>

            <p>Home</p>
            <p>Recipe</p>
            <p>My Recipe</p>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <h4 className='mb-4'>Guides</h4>
          <div>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className="col md-3 d-md-flex justify-content-center">
          <div>
            <h4>Contact Us</h4>
            <div className='d-flex mt-4'>
              <input type="text" className='form-control' placeholder='Email Id' />
              <button className='btn btn-dark ms-4'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <i className="fa-brands fa-twitter fa-xl"></i>
              <i className="fa-brands fa-instagram fa-xl"></i>
              <i className="fa-brands fa-facebook fa-xl"></i>
              <i className="fa-brands fa-linkedin fa-xl"></i>
              <i className="fa-brands fa-github fa-xl"></i>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer


