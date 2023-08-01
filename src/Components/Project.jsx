import React from 'react'
import { githubSvg, linkSvg } from '../svgs'

export default function Project(props) {
  const { title, url, photo, description, description2, sourcecode } = props

  return (
    <div className="project-div">
      <span className="red">{title}</span>
      <div className="photo-div">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={photo} alt={title} />
        </a>
      </div>
      <p>{description}</p>
      <p>{description2}</p>
      <div className="links-div">
        <a href={sourcecode} target="_blank" rel="noreferrer">
          {githubSvg('black', 32)}
        </a>
        <a href={url} target="_blank" rel="noreferrer">
          {linkSvg(40)}
        </a>
      </div>
    </div>
  )
}
