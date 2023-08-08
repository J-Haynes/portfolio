import React from 'react'

import { githubSvg, linkedInSvg } from '../svgs'

import FadeIn from '../animation/fade'

export default function Header() {
  return (
    <>
      <FadeIn setDelay={0}>
        <div className="title-div" id="title">
          <h4 className="kiaora">
            Kia Ora! My name is <span className="red">Jack</span>
          </h4>
          <h2 className="red">Full Stack Web Developer</h2>
        </div>
      </FadeIn>
      <FadeIn setDelay={1}>
        <div className="info-div">
          <h4>
            Hello! 👋 My name is Jack Haynes, a full stack web developer based
            in Wellington, New Zealand.
          </h4>
          <h4>Please check out my social links and projects below.</h4>
        </div>
      </FadeIn>
      <FadeIn setDelay={1}>
        <div className="icons-div">
          <a
            href="https://github.com/J-Haynes"
            target="_blank"
            rel="noreferrer"
          >
            {githubSvg('white', 50)}
          </a>
          <a
            href="https://www.linkedin.com/in/jack-haynes-nz/"
            target="_blank"
            rel="noreferrer"
          >
            {linkedInSvg('white', 50)}
          </a>
          <a
            href="https://drive.google.com/file/d/13OzzgRLCG2RvfOncRGdP3FPzz7gHCuJK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./cv.png" alt="cv" className="cv-img" />
          </a>
        </div>
      </FadeIn>
    </>
  )
}
