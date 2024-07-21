// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBgClassName = isDarkTheme ? 'is-dark-bg' : `is-light-bg`

      const notFoundHeadingTextClassName = isDarkTheme
        ? 'is-light-theme-title'
        : 'is-dark-theme-title'

      const notFoundContentTextClassName = isDarkTheme
        ? 'is-light-theme-description'
        : 'is-dark-theme-description'

      return (
        <div className={`not-found-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="responsive-container">
            <div className="responsive-not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image"
              />
              <h1
                className={`not-found-heading ${notFoundHeadingTextClassName}`}
              >
                Lost Your Way?
              </h1>
              <p
                className={`not-found-content ${notFoundContentTextClassName}`}
              >
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
