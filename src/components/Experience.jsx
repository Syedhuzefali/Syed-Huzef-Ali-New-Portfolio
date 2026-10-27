import Section from "./Section.jsx";
import Timeline from "./Timeline.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Timeline items={experience} />
    </Section>
  );
}
