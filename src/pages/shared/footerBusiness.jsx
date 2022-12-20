import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoWhite.svg'

const FooterBusiness = () => {
  return (
    <>
    <footer style={{backgroundColor: '#2F2F2F'}} className='Business-footer'>
        <div className="section-one">
          <img src={logo} alt="img" />
          <h3 className='titles-footer'>Pages</h3>
          <br />
          <ul>
            <li>
              <Link to={""}>Home</Link>
              <Link to={""}>Our App</Link>
              <Link to={""}>Courses</Link>
              <Link to={""}>Teach</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3 className='titles-footer'>Links</h3>
          <ul>
            <li>
              <Link to={""}>Blogs</Link>
              <Link to={""}>Support</Link>
            </li>
          </ul>
        </div>
        <div className="privacity">
          <h3 className='titles-footer'>Conditions</h3>
          <ul>
            <li>
              <Link to={""}>Privacy Plicy</Link>
              <Link to={""}>Side Configuration</Link>
              <Link to={""}>Cookie map</Link>
            </li>
          </ul>
        </div>
        <div className="regist">
          <h3 className='titles-footer'>Do you want to be the first?</h3>
          <p>Register and do not miss the news</p>
          <div className="inputs">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your email"
            />
          </div>
          <button type="button" className="btn btn-primary" style={{backgroundColor: '#F3B601'}}>
            Send Now
          </button>
        </div>
    </footer>
  </>
  )
}

export default FooterBusiness