import Section from "./Section.jsx";
import { certificates } from "../data/portfolio.js";

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates & Achievements">
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <article className="certificate-card" key={certificate.title}>
            <div className="certificate-card-top">
              <span className="certificate-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="certificate-mark" aria-hidden="true">✦</span>
            </div>
            <h3>{certificate.title}</h3>
            <p className="certificate-issuer">{certificate.issuer}</p>
            <p className="certificate-date">{certificate.when}</p>
            <a className="certificate-link" href={certificate.link} target="_blank" rel="noreferrer">
              View certificate <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
