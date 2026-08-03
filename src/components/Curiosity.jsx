import { Bot, Cpu, Megaphone, Palette, SearchCheck, Sparkles } from "lucide-react";

const curiosities = [
  {
    text: "Adobe Creative Cloud",
    Icon: Palette
  },
  {
    text: "Product Design",
    Icon: Sparkles
  },
  {
    text: "UX Research",
    Icon: SearchCheck
  },
  {
    text: "AI Tools",
    Icon: Bot
  },
  {
    text: "Marketing",
    Icon: Megaphone
  },
  {
    text: "Robotics",
    Icon: Cpu
  }
];

function Curiosity() {
  return (
    <section className="curiosity section">
      <div className="section-inner centered">
        <p className="eyebrow">Curiosity</p>
        <h2>
          Currently <em>curious about...</em>
        </h2>
        <div className="curiosity-grid">
          {curiosities.map(({ text, Icon }, index) => (
            <article className={`curiosity-card card-${index + 1}`} key={text}>
              <span className="curiosity-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{text}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Curiosity;