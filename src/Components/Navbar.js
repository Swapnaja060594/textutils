import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) { //whenever any props sets, we need to write here in the bracket first then set in the program in the curly brackets eg.{props.title} line no.9
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-secondary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Btn}</label>
      </div>
    </div>
  </div>
</nav>
  )
}
//propsTypes : It sets the type for any variable 
//isRequired : It used when any variable is required to display 
Navbar.propTypes = {
    title: propTypes.string.isRequired,
    aboutText: propTypes.string
}

//defaultprops : It sets the default value to any variable when there is no value set for that particular variable after.
Navbar.defaultprop = {
    title: 'Set title here',
    aboutText: 'About Us'
}