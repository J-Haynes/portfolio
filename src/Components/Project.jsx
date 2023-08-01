import React from 'react'
import { githubSvg, linkSvg } from '../svgs'

export default function Project(
  title,
  url,
  photo,
  description,
  description2,
  sourcecode
) {
  return (
    <div className="project-div">
      <h4>{title}</h4>
      <div className="photo-div">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={photo} alt="" />
        </a>
      </div>
      <p>{description}</p>
      <p>{description2}</p>
      <div className="links-div">
        <a href={sourcecode} target="_blank" rel="noreferrer">
          {githubSvg('black', 32)}
        </a>
        <a href={url} target="_blank" rel="noreferrer">
          {linkSvg('black', 40)}
        </a>
      </div>
    </div>
  )
}
