import Image from "next/image";
import type { CSSProperties } from "react";

import type { Project } from "../projects";
import ProjectVideo from "./ProjectVideo";

const list = new Intl.ListFormat("en-AU", { type: "conjunction" });

export default function ProjectCard({ project }: { project: Project }) {
  const { name, summary, stack, accent, code, url, urlstring, image } = project;

  return (
    <article className="project" style={{ "--project-accent": accent } as CSSProperties}>
      <div className={`project-media${image ? ` project-media-${image.frame}` : ""}`}>
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
        <p>{summary}</p>
        <p className="stack">Built with {list.format(stack)}.</p>
        <div className="project-links">
          {url && urlstring && (
            <a href={url} target="_blank" rel="noreferrer">
              {urlstring}
            </a>
          )}
          <a href={code} target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
