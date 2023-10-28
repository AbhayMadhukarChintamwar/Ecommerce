import React from 'react'
function Header() {
  return (
    <div>
    <div className="top-navbar">
      <p>Welcome to our shops</p>
      <div className="icons">
        <a href="register.html">
          <button className="bts">SignIn</button>
        </a>
      </div>
    </div>
    {/*  top navbar  */}

    {/* navbar  */}

    <nav className="navbar navbar-expand-lg " id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" id="logo"><span className="span1">My</span>Cart<span className="span1"> Shop</span></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="index.html"
                >Home</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Product</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Electronics</a></li>
                <li><a className="dropdown-item" href="/">Cloths</a></li>
                <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                <li><a className="dropdown-item" href="/">Smart Phones</a></li>
                <li><a className="dropdown-item" href="/">Smart Phones</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/">Contact</a>
            </li>
          </ul>
          <form className="d-flex" role="search" id="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
     {/* navbar  */}
    </div>
  )
}

export default Header
