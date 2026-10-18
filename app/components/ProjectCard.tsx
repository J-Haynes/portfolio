import Image from "next/image";
import type { CSSProperties } from "react";

import type { Project } from "../projects";
import { ArrowIcon } from "./icons";
import ProjectVideo from "./ProjectVideo";

export default function ProjectCard({ project }: { project: Project }) {
  const { name, summary, stack, accent, code, url, urlstring, image } = project;

  return (
    <article className="project" style={{ "--project-accent": accent } as CSSProperties}>
      <div className="project-media">
        {image ? (
          <div className={`frame frame-${image.frame}`}>
            {image.video ? (
              <ProjectVideo
                src={image.video}
                poster={image.src.src}
                width={image.src.width}
                height={image.src.height}
                label={image.alt}
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                placeholder="blur"
                sizes={image.frame === "phone" ? "300px" : "(max-width: 900px) 100vw, 640px"}
              />
            )}
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
        <a className="text-link" href="{url}" target="_blank">{urlstring}</a>
        <p>{summary}</p>
        <ul className="stack" aria-label="Built with">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          {url && (
            <a className="button" href={url} target="_blank" rel="noreferrer">
              Visit<ArrowIcon />
            </a>
          )}
          <a className={url ? "text-link" : "button"} href={code} target="_blank" rel="noreferrer">
            View source <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
