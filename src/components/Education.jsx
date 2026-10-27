import Section from "./Section.jsx";
import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="education-grid">
        {education.map((item, index) => (
          <article className={`education-card${index === 0 ? " education-card-featured" : ""}`} key={item.title}>
            <div className="education-card-top">
              <span className="education-level">{item.level}</span>
              <span className="education-year">{item.when}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="education-place">{item.place}</p>
            <div className="education-result">
              <span>Result</span>
              <strong>{item.score}</strong>
            </div>
            {item.certificate && (
              <a className="certificate-link" href={item.certificate} target="_blank" rel="noreferrer">
                {item.level === "Graduation" ? "View degree certificate" : "View marksheet certificate"} <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
