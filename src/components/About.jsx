import { GraduationCap, MapPin, MonitorSmartphone, Sparkle } from "lucide-react";

const facts = [
  {
    label: "Based in Berlin",
    Icon: MapPin
  },
  {
    label: "UX/UI + Web Dev",
    Icon: MonitorSmartphone
  },
  {
    label: "10+ Projects",
    Icon: Sparkle
  },
  {
    label: "SRH University",
    Icon: GraduationCap
  }
];

function About() {
  return (
    <section className="about section blush-band" id="about">
      <div className="section-inner about-grid">
        <div>
          <p className="eyebrow with-line">About me</p>
          <h2>
            Hey, I'm <em>Milica.</em>
          </h2>
          <div className="about-text">
            <p>
              I started coding in 2023, focusing on HTML, CSS, and JavaScript building my first
              project, a small gym app with a strong emphasis on design and user experience.
            </p>
            <p>
              Since then, I have worked on various university projects, combining design and
              development to create functional digital products from educational platforms to
              marketing applications.
            </p>
            <p>
              I have a strong interest in UI/UX design, particularly in shaping user flows and
              transforming ideas into intuitive experiences. I enjoy the full journey from concept
              to finished product.
            </p>
          </div>
        </div>

        <aside className="about-panel" aria-label="Current highlights">
          <div className="currently-card">
            <span>Currently focused on -&gt;</span>
            <p>Thoughtful interfaces, clear user flows, and digital products with personality.</p>
          </div>
          <div className="fact-grid">
            {facts.map(({ label, Icon }) => (
              <div className="fact-card" key={label}>
                <span className="fact-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;