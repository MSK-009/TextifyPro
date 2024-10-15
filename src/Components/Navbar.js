import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.btnColor}`}>
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
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          <div className="btn-group mx-4 my-2" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-primary" onClick={()=> {props.toggleBtnColor('primary'); props.mode === 'dark'?document.body.style.backgroundColor = '#004797':document.body.style.backgroundColor = 'white'}}></button>
            <button type="button" className="btn btn-danger" onClick={()=> {props.toggleBtnColor('danger'); props.mode === 'dark'?document.body.style.backgroundColor = 'rgb(62 0 3)':document.body.style.backgroundColor = 'white'}}></button>
            <button type="button" className="btn btn-info" onClick={()=> {props.toggleBtnColor('info'); props.mode === 'dark'?document.body.style.backgroundColor = '#007387':document.body.style.backgroundColor = 'white'}}></button>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboout: PropTypes.string
}
navbar.defaultProps = {
  title: 'TextifyPro',
  about: 'About'
}