import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoWhite.svg'
import googlePlay from '../../assets/googleplay.svg'
import Apple from '../../assets/apple.svg'


const FooterBusiness = () => {

  const styles = {
    styleButtons: {
      padding: '10px 30px',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: '#282828',
      backgroundColor: '#fff',
      border: 'none'
    },
    styleDivButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: '20px', 
      marginBottom: '50px'
    }
  }
  return (
    <>
    <footer style={{backgroundColor: '#2F2F2F'}} className='Business-footer'>
      <div className="contenedor-footer" style={{marginBottom: '10px'}}>
        <div className="section-one">
          <img src={logo} alt="img" />
          <h3 className='titles-footer'>Pages</h3>
          <br />
          <ul>
            <li>
            <Link to={'/'} >Home</Link>
            <Link to={''} >Our App</Link>
            <Link to={'/categories'} >Courses</Link>
            <Link to={'/homeTeacher'} >Teach</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3 className='titles-footer'>Links</h3>
          <ul>
            <li>
              <Link to={""}>Blogs</Link>
              <a href='/help'>Support</a>
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
      </div>
      <div className='butonsDownloadFooter' style={styles.styleDivButton}>
        <button className='btn btn-secondary' style={styles.styleButtons} >
          Download Now!
          <img src={googlePlay} style={{width: '100%', maxWidth: '300px',  marginTop: '-10px'}}/>
        </button>
        <button className='btn btn-secondary' style={styles.styleButtons}>
          Download Now!
          <img src={Apple} style={{width: '100%', marginTop: '-35px', maxWidth: '300px'}}/>
        </button>
      </div>
      <br />
      <a href="http://miamisignaturedesigns.com/" style={{color: '#A7A7A7', textDecoration: 'none'}}>Copyright © 2022 Developed by MSD Soft</a>
    </footer>
  </>
  )
}

export default FooterBusiness