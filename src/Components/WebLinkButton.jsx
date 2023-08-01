import React from 'react'

import { linkSvg } from '../svgs'

export default function WebLinkButton(props) {
  const { url } = props
  return (
    <div className="weblink">
      <a href={url} target="_blank" rel="noreferrer">
        {linkSvg(30)} <span>Web Link</span>
      </a>
    </div>
  )
}
