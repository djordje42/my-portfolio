import React from 'react'
import './about.css'
import reactimg from '../../img/react.png'
import award from '../../img/award.png'

const About = () => {
  return (
    <div className='a' id='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className='a-img' src={reactimg} alt="about" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About</h1>
        <p className="a-sub">
        I am a passionate programming freelancer 
        with solid experience in web app and desktop application development. 
        This includes full front-end design, 
        brand identity, graphics, illustrations, etc.
        </p>
        <p className="a-desc">
        My web developer portfolio makes great use of fullPage.js 
        JavaScript component to create a beautiful full-screen experience 
        that also serves as a way to proof his front-end skills.
        If you are looking to build a portfolio with beautiful 
        visuals and a few texts, you should definitely consider using the 
        fullPage.js fullscreen carousel. It will give your page a modern touch 
        and will for sure be a different portfolio that will catch the viewer's 
        attention.
        </p>
        <div className="a-award">
          <img src={award} alt="award" className="a-award-img" />
          <div className="a-award-texts">
          <h4 className="a-award-title">Freecodecamp.org</h4>
          <p className="a-award-desc">
            I managed to surpass Freecodecamps's challenges in 2022!
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About