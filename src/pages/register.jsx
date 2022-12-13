import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/register.css'
import backGround from '../assets/Union.png'
import google from '../assets/google.png'


export default class register extends Component {
  render() {
    return (
      <>
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
              <button type='button' className='btn btn-primary'>Create my account</button>
              <p>looking for education of your employees?</p>
              <button type='button' className='btn btn-primary'>sing up as an organization</button>
            </div>
          </div>
        </div>
        <img src={backGround} alt="i" />  
      </div>
    </>
    )
  }
}
