// import React from 'react'

const navbar = () => {
  return (
    <div className="navbar container mx-auto">
        <a href="#" className="navbar-brand w-100">
          <span className="text-secondary w-100">
          My Tinerary
          </span>
        </a>
        <button type="button" className="btn order-1">Login</button>
        <img src="./assets/login.png" alt="Login" id="login" className="order-3" /> 
        <div className="dropdown order-2 ">
            <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Home</a></li>
              <li><a className="dropdown-item" href="#">Cities</a></li>
            </ul>
          </div>
    </div>
  )
}

export default navbar