// Experience aur Education dono isi se dikhte hain
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((i) => (
        <li key={i.title}>
          <h3>{i.title}</h3>
          <p className="muted">{[i.place, i.when].filter(Boolean).join(", ")}</p>
          {i.score && <p>{i.score}</p>}
          {i.text && <p>{i.text}</p>}
          {i.points && <ul>{i.points.map((point) => <li key={point}>{point}</li>)}</ul>}
          {i.certificate && <a href={i.certificate} target="_blank" rel="noreferrer">View training certificate ↗</a>}
        </li>
      ))}
    </ol>
  );
}
