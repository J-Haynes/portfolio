import React from 'react'

import { githubSvg } from '../svgs'

export default function SourceCodeButton(props) {
  const { sourcecode } = props
  return (
    <div className="sourcecode">
      <a href={sourcecode} target="_blank" rel="noreferrer">
        {githubSvg('black', 30)} <span>Source Code</span>
      </a>
    </div>
  )
}
