import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = (e) => {
    if (e && (e.type === 'keydown' && (e.key !== 'Enter' && e.key !== ' '))) return;
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({ navBarActiveClass: 'is-active' })
          : this.setState({ navBarActiveClass: '' })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '140px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={this.toggleHamburger}
              onKeyDown={this.toggleHamburger}
              role="button"
              tabIndex={0}
              aria-label="menu"
              aria-expanded={this.state.active}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <span className="navbar-link" tabIndex={0} role="button">
                  About us
                </span>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/about">
                    Values and Mission
                  </Link>
                  <hr className="navbar-divider"/>
                  <Link className="navbar-item" to="/team">
                    Our Team
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/products">
                Services
              </Link>
              {/* <Link className="navbar-item" to="/blog">
                Publications/Releases
              </Link> */}
              <Link className="navbar-item" to="/products">
                Gallery
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>

              {/* this is commented because we dont need this right now, 
              this has link to the contact and upload page */}

              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}

            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
