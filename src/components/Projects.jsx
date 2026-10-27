import Section from "./Section.jsx";
import { projects } from "../data/portfolio.js";

function Project({ p }) {
  return (
    <article className={p.featured ? "project featured" : "project"}>
      <div className="project-heading">
        <div>
          <span className="project-type">{p.featured ? "Full-stack project" : "Mini project"}</span>
          <h3>{p.title}</h3>
        </div>
        {p.when && <span className="project-date">{p.when}</span>}
      </div>
      <p>{p.text}</p>
      {p.points && <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>}
      <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      <div className="actions">
        {p.live && <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
        {p.code && <a className="btn" href={p.code} target="_blank" rel="noreferrer">Source code</a>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="project-grid">
        {projects.map((project) => <Project key={project.title} p={project} />)}
      </div>
    </Section>
  );
}
