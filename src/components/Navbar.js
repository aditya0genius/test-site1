import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const user = JSON.parse(localStorage.getItem("currentuser"));
  function logout() {
    localStorage.removeItem('currentuser');
    window.location.href="/login";
  }

class Navbar extends Component {
  
  constructor(props) {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    navListClasses: "navList",
    navOpen: false,
  };

  toggleNav = () => {
    const toggleChange = !this.state.navOpen;

    if (toggleChange)
      this.setState({
        navListClasses: "navList open",
        navOpen: true,
      });
    else
      this.setState({
        navListClasses: "navList",
        navOpen: false,
      });
  };

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="navbarTop">
            <div className="hamburger" onClick={(e) => this.toggleNav(e)}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
            <Link to="/">
              <img
                src="\myVenue-Logo(Golden).png"
                className="mobileNavLogo"
                alt="MyVenue Logo"
              />
            </Link>
            <ul
              className={this.state.navListClasses}
              onClick={(e) => this.toggleNav(e)}
            >
              <Link to="/">
                <img src="myVenue-Logo(Golden).png" alt="MyVenue" height="30px" />
              </Link>
              <Link to="/services">Our Services</Link>
              <Link to="/reachus">Reach Us</Link>
              <Link to="/ourstory">Our Story</Link>
              {user ? (
                <>
                  {/* <h1 style={{color:'white'}}>{user.name}</h1> */}
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user.name}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                      <a className="dropdown-item" href="/" onClick={logout}>
                        Logout
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/register"
                    >
                      Register
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
}

export default Navbar;