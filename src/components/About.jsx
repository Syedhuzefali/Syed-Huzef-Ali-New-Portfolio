import Section from "./Section.jsx";
import { about } from "../data/portfolio.js";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="prose">{about.map((t) => <p key={t}>{t}</p>)}</div>
    </Section>
  );
}
