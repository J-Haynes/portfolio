import Image from "next/image";
import type { CSSProperties } from "react";

import type { Project } from "../projects";
import { ArrowIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  const { name, summary, stack, accent, code, site, image } = project;

  return (
    <article className="project" style={{ "--project-accent": accent } as CSSProperties}>
      <div className="project-media">
        {image ? (
          <div className={`frame frame-${image.frame}`}>
            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              sizes={image.frame === "phone" ? "300px" : "(max-width: 900px) 100vw, 640px"}
            />
          </div>
        ) : (
          <div className="frame frame-placeholder">
            <span>{name}</span>
            <small>Screenshot coming soon</small>
          </div>
        )}
      </div>

      <div className="project-text">
        <h3>{name}</h3>
        <p>{summary}</p>
        <ul className="stack" aria-label="Built with">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          {site && (
            <a className="button" href={site} target="_blank" rel="noreferrer">
              Visit site <ArrowIcon />
            </a>
          )}
          <a className={site ? "text-link" : "button"} href={code} target="_blank" rel="noreferrer">
            View code <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
