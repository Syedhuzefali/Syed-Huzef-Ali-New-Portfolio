import Section from "./Section.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skill-grid">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3>{group}</h3>
            <ul className="chips">{items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
