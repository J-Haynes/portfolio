import React from 'react'
import Project from './Project'
import data from '../projects.json'

import FadeIn from '../animation/fade'

const projects = data.projects

export default function Portfolio() {
  return (
    <FadeIn setDelay={2}>
      <div className="container">
        <div className="portfolio-div">
          {projects.map((project) => {
            return (
              <Project
                key={project.title}
                title={project.title}
                url={project.url}
                photo={project.photo}
                description={project.description}
                description2={project.description2}
                sourcecode={project.sourcecode}
              />
            )
          })}
        </div>
      </div>
    </FadeIn>
  )
}
