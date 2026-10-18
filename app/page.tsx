import ProjectCard from "./components/ProjectCard";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/icons";
import TrackHero from "./hero/TrackHero";
import { projects } from "./projects";

export default function Home() {
  return (
    <>
      <header className="hero">
        <TrackHero />
        <div className="hero-content">
          <p className="eyebrow">Melbourne, Australia</p>
          <h1>Jack Haynes</h1>
          <nav className="hero-links" aria-label="Links">
            {/* TODO: link the CV */}
            <a className="button button-solid" href="#">
              View CV
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/jack-haynes-nz/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a className="icon-link" href="mailto:mail@jackhaynes.dev" aria-label="Email">
              <MailIcon />
            </a>
            <a className="icon-link" href="https://github.com/J-Haynes" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
          </nav>
        </div>
      </header>

      <main id="projects" className="projects">
        <h2>Recent projects</h2>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </main>

      <footer className="footer">
        <span>Jack Haynes · Melbourne · Track map © OpenStreetMap contributors</span>
        <a href="https://github.com/J-Haynes/portfolio" target="_blank" rel="noreferrer">
          Source
        </a>
      </footer>
    </>
  );
}
