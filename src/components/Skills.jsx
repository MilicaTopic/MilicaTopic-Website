import { Sparkle } from "lucide-react";
const skills = [
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Flutter",
  "Joomla",
  "Strapi",
  "GitHub",
  "ProtoPie",
  "Adobe CC"
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-inner centered">
        <p className="eyebrow">Skills</p>
        <h2>
          My digital <em>toolbox.</em>
        </h2>
        <p className="section-description">The technologies and tools I work with every day.</p>
        <div className="skill-cloud" aria-label="Digital tools and technologies">
          {skills.map((skill, index) => (
            <span className={`skill-pill tone-${(index % 6) + 1}`} key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className="tiny-decor" aria-hidden="true">
          <Sparkle className="decor-star" aria-hidden="true" />
          <Sparkle className="decor-star" aria-hidden="true" />
          <Sparkle className="decor-star" aria-hidden="true" />
          <Sparkle className="decor-star" aria-hidden="true" />
          <Sparkle className="decor-star" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Skills;