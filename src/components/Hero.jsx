import { Sparkle } from "lucide-react";
const cvPath = "/assets/cv/milica-topic-cv.pdf";

function Hero() {
  return (
    <section className="hero section" id="top">
        <div className="hero-glow hero-glow-pink" />
        <div className="hero-glow hero-glow-lavender" />
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="eyebrow with-line">UX/UI Designer + Web Developer</p>
            <h1>
              Designing digital <em>experiences</em> with personality.
            </h1>
            <p className="hero-text">
              I'm Milica, a Berlin-based designer and developer creating thoughtful, intuitive
              digital experiences from first idea to final interface.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="button button-outline" href={cvPath} target="_blank" rel="noreferrer">
                My CV
              </a>
            </div>
          </div>

          <div className="portrait-wrap" aria-label="Portrait of Milica Topic">
            <div className="hero-stars" aria-hidden="true">
              {[2, 3, 4, 5, 6].map((star) => (
                <Sparkle className={`hero-star hero-star-${star}`} key={star} aria-hidden="true" />
              ))}
            </div>
            <div className="portrait-orbit dashed" />
            <div className="portrait-orbit lavender" />
            <span className="location-badge">Based in Berlin</span>
            <div className="portrait-card has-photo">
              <img
                className="portrait-photo"
                src="/images/milicatopic-portfolio-photo.png"
                alt="Milica Topic smiling in front of a pink floral background"
              />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Hero;