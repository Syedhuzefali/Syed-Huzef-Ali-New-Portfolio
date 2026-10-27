import { profile } from "../data/portfolio.js";

export default function Hero() {
  const nameParts = profile.name.trim().split(/\s+/);
  const highlightedName = nameParts.pop();
  const firstName = nameParts.join(" ");

  return (
    <section id="home" className="hero" data-reveal>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Open to work · Bhopal, India</p>
          <h1>{firstName} <span className="hero-name-accent">{highlightedName}</span></h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.tagline}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="actions">
            <a className="btn primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="btn" href={`${import.meta.env.BASE_URL}${profile.resume}`} target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div>
        </div>
        <aside className="hero-visual" aria-label="Technology stack">
          <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
          <div className="hero-card">
            <div className="hero-card-top">
              <span className="status-dot" aria-hidden="true" />
              <span>Available for opportunities</span>
            </div>
            <p className="hero-card-label">A developer's toolkit</p>
            <div className="hero-stack">
              {["React", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-card-footer">
              <span>Build</span><span>Learn</span><span>Ship</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
