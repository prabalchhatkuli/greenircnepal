import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import logoWhite from '../img/logo-white.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      isDarkMode: false,
    }
  }

  componentDidMount() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark)
    
    this.setState({ isDarkMode })
    this.applyTheme(isDarkMode)
  }

  applyTheme = (isDarkMode) => {
    const root = document.documentElement
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.setAttribute('data-theme', 'light')
    }
  }

  toggleDarkMode = () => {
    const newDarkMode = !this.state.isDarkMode
    this.setState({ isDarkMode: newDarkMode })
    this.applyTheme(newDarkMode)
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
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
              <img 
                src={logo} 
                alt="Green Innovative Research Center Nepal" 
                style={{ width: '140px' }}
                className="logo-light" 
              />
              <img 
                src={logoWhite} 
                alt="Green Innovative Research Center Nepal" 
                style={{ width: '140px' }}
                className="logo-dark" 
              />
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

              {/* Dark Mode Toggle */}
              <div className="navbar-item">
                <button
                  className="button is-small theme-toggle"
                  onClick={this.toggleDarkMode}
                  aria-label={`Switch to ${this.state.isDarkMode ? 'light' : 'dark'} mode`}
                  title={`Switch to ${this.state.isDarkMode ? 'light' : 'dark'} mode`}
                >
                  <span className="icon">
                    {this.state.isDarkMode ? (
                      // Sun icon for light mode
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                      </svg>
                    ) : (
                      // Moon icon for dark mode
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                      </svg>
                    )}
                  </span>
                </button>
              </div>

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
