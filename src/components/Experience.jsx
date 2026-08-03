const education = [
  {
    place: "SRH University",
    role: "Web Development / UX/UI Design",
    date: "Oct 2024 - ongoing"
  },
  {
    place: "Clay Oberschule",
    role: "Abitur",
    date: "Sept 2017 - July 2024"
  }
];

const experience = [
  {
    place: "SRH University",
    role: "Working Student, International Office",
    date: "May 2026 - ongoing"
  },
  {
    place: "SRH University",
    role: "School Council & Ambassador",
    date: "Mar 2026 - ongoing"
  },
  {
    place: "Retail",
    role: "New Yorker \u00b7 C&A \u00b7 dm",
    date: "Previous roles"
  }
];

function TimelineColumn({ title, items, tone }) {
  return (
    <div className={`timeline-column ${tone}`}>
      <h3>{title}</h3>
      <div className="timeline-list">
        {items.map((item) => (
          <article className="timeline-card" key={`${item.place}-${item.role}`}>
            <span className="marker" aria-hidden="true" />
            <div className="timeline-card-copy">
              <h4>{item.place}</h4>
              <p>{item.role}</p>
            </div>
            <span className="date-pill">{item.date}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="experience section blush-band" id="experience">
      <div className="section-inner">
        <p className="eyebrow with-line">Background</p>
        <h2>
          Education &<br /> <em>Experience.</em>
        </h2>
        <div className="timeline-grid">
          <TimelineColumn title="Education" items={education} tone="education-column" />
          <TimelineColumn title="Experience" items={experience} tone="experience-column" />
        </div>
      </div>
    </section>
  );
}

export default Experience;