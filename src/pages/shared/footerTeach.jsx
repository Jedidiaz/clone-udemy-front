import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import '../../styles/footer.css'
import googlePlay from '../../assets/googleplay.svg'
import Apple from '../../assets/apple.svg'

const FooterStudent = () => {
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
      <footer style={{backgroundColor: '#F3B601'}}>
        <div className="contenedor-footer" style={{marginBottom: '10px'}}>
          <div className="section-one">
            <img src={logo} alt="img" />
            <h3 style={{color: '#fff'}}>Pages</h3>
            <br />
            <ul>
              <li>
              <Link to={'/'} style={{color: '#fff'}} >Home</Link>
              <Link to={''} style={{color: '#fff'}}>Our App</Link>
              <Link to={'/categories'} style={{color: '#fff'}}>Courses</Link>
              <Link to={'/homeTeacher'} style={{color: '#fff'}}>Teach</Link>
              </li>
            </ul>
          </div>
          <div className="links">
            <h3 style={{color: '#fff'}}>Links</h3>
            <ul>
              <li>
                <Link to={""} style={{color: '#fff'}}>Blogs</Link>
                <a href="/help" style={{color: '#fff'}}>Support</a>
              </li>
            </ul>
          </div>
          <div className="privacity">
            <h3 style={{color: '#fff'}}>Conditions</h3>
            <ul>
              <li >
                <Link to={""} style={{color: '#fff'}}>Privacy Plicy</Link>
                <Link to={""} style={{color: '#fff'}}>Side Configuration</Link>
                <Link to={""} style={{color: '#fff'}}>Cookie map</Link>
              </li>
            </ul>
          </div>
          <div className="regist" >
            <h3 style={{color: '#fff'}}>Do you want to be the first?</h3>
            <p style={{color: '#fff'}}>Register and do not miss the news</p>
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
            <button type="button" className="btn btn-primary">
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
        <a href="http://miamisignaturedesigns.com/" style={{color: '#fff', textDecoration: 'none'}}>Copyright © 2022 Developed by MSD Soft</a>
      </footer>
    </>
  );
};

export default FooterStudent;
