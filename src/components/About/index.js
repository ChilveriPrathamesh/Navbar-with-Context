// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const homeTitleClassName = isDarkTheme
        ? 'is-light-theme-title'
        : 'is-dark-theme-title'

      return (
        <div className={`about-app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="responsive-container">
            <img src={imageUrl} className="home-image" alt="about" />
            <h1 className={`home-title ${homeTitleClassName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
