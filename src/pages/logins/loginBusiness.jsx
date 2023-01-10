import React from 'react'
import Header from "../shared/headerBusiness";
import Footer from "../shared/footer";

import '../../styles/login.css'
import { Link } from 'react-router-dom'
import backGround from '../../assets/loginB.png'
import google from '../../assets/google.png'


const LoginBusiness = () => {
  return (
    <>
    <Header />
      <div className='contenedor'>
      <div className='card-login'>
          <div className='buttons-log'>
            <button className='btn btn-primary' type='button'><img src={google} /> Continue with google</button>
            <button className='btn btn-primary' type='button'><i className="bi bi-apple"></i> Continue with Apple  </button>
            <button className='btn btn-primary' type='button'><i className="bi bi-facebook"></i> Continue with facebook</button>
          </div>
          <div className="separador">
            <div></div>
            or
            <div></div>
          </div>
          <div className='formulario'>
            <div>
              <i className="bi bi-envelope"></i>
              <input type="email" className='form-control form-control-lg' placeholder='email'/>
            </div>
            <div>
              <i className="bi bi-key" ></i>
              <input type="password" className='form-control form-control-lg' placeholder='password'/>
            </div>
            <div className="buttons-login">
              <button type='button' className='btn btn-primary'>Login</button>
              <p >Forgot your  <Link to={'/register'} className='forgot-lb'>password</Link>?</p>
            </div>
          </div>
        </div>
        <img src={backGround} alt="i" />  
      </div>
      <Footer />
    </>
  )
}


export default LoginBusiness