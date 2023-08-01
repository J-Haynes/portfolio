import React from 'react'
import SourceCodeButton from './SourceCodeButton'
import WebLinkButton from './WebLinkButton'
import { githubSvg, linkSvg } from '../svgs'

export default function Project(props) {
  const { title, url, photo, description, description2, sourcecode } = props

  return (
    <div className="project-div" id={title}>
      <span className="project-title">{title}</span>
      <div className="photo-div">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={photo} alt={title} />
        </a>
      </div>
      <p>{description}</p>
      <p>{description2}</p>
      <div className="links-div">
        <SourceCodeButton sourcecode={sourcecode} />
        <WebLinkButton url={url} />
      </div>
    </div>
  )
}
