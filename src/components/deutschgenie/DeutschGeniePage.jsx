import { useRef } from "react";
import { usePhoneMockupCarousel } from "../usePhoneMockupCarousel.js";

const assetBase = "/assets/deutschgenie/figma";

const tags = ["UX Research", "UI Design", "Prototyping", "Development"];

const grammarCategories = [
  { title: "Nomen", subtitle: "Substantive", tone: "nomen", icon: "icon-nomen.png" },
  { title: "Verben", subtitle: "Taetigkeitswoerter", tone: "verben", icon: "icon-verben.png" },
  { title: "Pronomen", subtitle: "Fuerwoerter", tone: "pronomen", icon: "icon-pronomen.png" },
  { title: "Artikel", subtitle: "Begleiter", tone: "artikel", icon: "icon-artikel.png" }
];

const journeyScreens = [
  ["Welcome & Introduction", "cropped/journey-1-phone.png"],
  ["Grammar Categories", "cropped/journey-2-phone.png"],
  ["Interactive Tutorial", "cropped/journey-3-phone.png"],
  ["Category Recognition", "cropped/journey-4-phone.png"],
  ["Understanding Articles", "cropped/journey-5-phone.png"],
  ["Practice Exercise", "cropped/journey-6-phone.png"],
  ["Matching Challenge", "cropped/journey-7-phone.png"],
  ["Completed Exercise", "cropped/journey-8-phone.png"],
  ["Success & Celebration", "cropped/journey-9-phone.png"]
].map(([title, image]) => ({ title, image: `${assetBase}/${image}` }));

const reflections = [
  {
    title: "What worked well?",
    body: "Users found the colour & icons system helpful to remember grammar",
    tone: "pink",
    icon: "icon-trophy.png"
  },
  {
    title: "What I've learned?",
    body:
      "i learned how visual design, colour psychology and clear information architecture can improve comprehension and motivation on language learning.",
    tone: "green",
    icon: "icon-check.png"
  },
  {
    title: "What is next?",
    body:
      "i plan to conduct user testing with learners and continue developing new exercises and features based on feedback",
    tone: "purple",
    icon: "icon-stair.png"
  }
];


function SectionTitle({ children }) {
  return <h3 className="dg-section-title">{children}</h3>;
}

function DeutschGenieHero() {
  return (
    <section className="dg-hero">
      <div className="dg-hero-copy">
        <h2>DeutschGenie</h2>
        <p className="dg-kicker">German Learning App</p>
        <p className="dg-description">
          A mobile language learning application designed to make learning German grammar more approachable, engaging,
          and memorable for beginners. Rather than relying solely on traditional memorization methods, the app
          introduces a visual learning approach that combines consistent colors, icons, and interactive exercises to
          help users recognize and understand grammatical concepts more naturally.
        </p>

        <p className="dg-website-line">
          <span>Website:</span>
          <a href="https://deutschgenie.vercel.app/" target="_blank" rel="noreferrer">
            https://deutschgenie.vercel.app/
          </a>
        </p>

        <div className="dg-tag-list">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <img className="dg-hero-image" src="/assets/deutschgenie/phones.svg" alt="DeutschGenie phone previews" draggable="false" />
    </section>
  );
}

function ChallengeSolution() {
  return (
    <div className="dg-two-column">
      <article className="dg-card dg-text-card">
        <SectionTitle>The Challenge</SectionTitle>
        <p>Grammar rules and catagories can feel confusing and dificult to remember, especially for beginners.</p>
      </article>
      <article className="dg-card dg-text-card">
        <SectionTitle>The Solution</SectionTitle>
        <p>A visual system that connects grammar categories with consistent color and icons to make learning intuitive.</p>
      </article>
    </div>
  );
}

function VisualSystem() {
  return (
    <section className="dg-card dg-visual-system">
      <SectionTitle>How It Works / Visual System</SectionTitle>
      <div className="dg-grammar-grid">
        {grammarCategories.map((category) => (
          <article className={`dg-grammar-card ${category.tone}`} key={category.title}>
            <img className="dg-grammar-icon" src={`${assetBase}/${category.icon}`} alt="" draggable="false" />
            <div>
              <h4>{category.title}</h4>
              <p>{category.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LearningJourney() {
  const trackRef = useRef(null);
  const { activePage, handleScroll, handleWheel, scrollToPage } = usePhoneMockupCarousel(trackRef, 3);

  return (
    <section className="dg-card dg-learning">
      <div className="dg-learning-header">
        <SectionTitle>The Learning Journey</SectionTitle>
        <div className="dg-journey-dots" aria-label="Learning journey pages">
          {[0, 1, 2].map((index) => (
            <button
              type="button"
              className={activePage === index ? "is-active" : ""}
              aria-label={`Show learning journey page ${index + 1}`}
              aria-pressed={activePage === index}
              key={index}
              onClick={() => scrollToPage(index)}
            />
          ))}
        </div>
      </div>

      <div
        className="dg-journey-track"
        onScroll={handleScroll}
        onWheel={handleWheel}
        ref={trackRef}
        tabIndex="0"
        aria-label="DeutschGenie learning journey screens"
      >
        {journeyScreens.map((screen) => (
          <article className="dg-phone-step" key={screen.title}>
            <h4>{screen.title}</h4>
            <span className="dg-phone-frame">
              <img className="dg-phone-image" src={screen.image} alt={`${screen.title} screen`} draggable="false" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function OutcomeReflection() {
  return (
    <section className="dg-card dg-outcome">
      <SectionTitle>Outcome & Reflection</SectionTitle>
      <div className="dg-outcome-grid">
        {reflections.map((item) => (
          <article className="dg-reflection" key={item.title}>
            <span className={`dg-reflection-icon ${item.tone}`}>
              <img src={`${assetBase}/${item.icon}`} alt="" draggable="false" />
            </span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DeutschGeniePage() {
  return (
    <section className="deutschgenie" id="deutschgenie-overview">
      <div className="dg-shell">
        <div className="dg-top-border" aria-hidden="true" />
        <DeutschGenieHero />
        <ChallengeSolution />
        <VisualSystem />
        <LearningJourney />
        <OutcomeReflection />        <div className="dg-bottom-border" aria-hidden="true" />
      </div>
    </section>
  );
}

export default DeutschGeniePage;