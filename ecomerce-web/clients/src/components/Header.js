import React from 'react'
function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid ">
    <a className="navbar-brand fw-bold text-white" href="/">Navbar scroll</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn bg-success  text-white" type="submit">Search</button>
      </form>
    <div className="  ">
      <ul className="navbar-nav me-auto my-2 my-lg-0 d-flex justify-content-end ">
        <li className="nav-item">
          <a className="nav-link fw-bold text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold text-white" aria-current="page" href="/">SignIn</a>
        </li>

        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
