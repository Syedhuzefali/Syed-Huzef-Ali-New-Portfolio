// Har section ka common wrapper: id (scroll target) + heading
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" data-reveal>
      <div className="wrap">
        <div className="section-heading">
          <span className="section-index" aria-hidden="true">{String(["about", "skills", "projects", "experience", "education", "certificates", "contact"].indexOf(id) + 1).padStart(2, "0")}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
