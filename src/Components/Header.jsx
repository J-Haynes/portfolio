import React from 'react'

import { githubSvg, linkedInSvg } from '../svgs'

export default function Header() {
  return (
    <>
      <div className="title-div">
        <h4 className="kiaora">
          Kia Ora! My name is <span className="red">Jack</span>
        </h4>
        <h2 className="red">Full Stack Web Developer</h2>
      </div>
      <div className="info-div">
        <h3>
          Hello! 👋 My name is Jack Haynes, a full stack web developer based in
          Wellington, New Zealand
        </h3>
        <h3>Please check out my social links and projects below.</h3>
      </div>
      <div className="icons-div">
        <a href="https://github.com/J-Haynes" target="_blank" rel="noreferrer">
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
          href="https://drive.google.com/file/d/1z6SHxXnKD8cTs-0QeaXDib2J7pBG1Yis/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./cv.png" alt="cv" className="cv-img" />
        </a>
      </div>
    </>
  )
}
