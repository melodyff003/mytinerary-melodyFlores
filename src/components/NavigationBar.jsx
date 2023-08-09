// import React from 'react'

const navbar = () => {
  return (
  <div className="dropdown">
    <button className="btn btn-outline-tertiary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Menu
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Home</a></li>
      <li><a className="dropdown-item" href="">Cities</a></li>
      <li><a className="dropdown-item" href="#">Login</a></li>
    </ul>
  </div>
  
  )
}

export default navbar