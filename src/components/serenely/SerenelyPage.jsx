import { useRef } from "react";
import { CalendarDays, Settings, UserRound } from "lucide-react";
import { usePhoneMockupCarousel } from "../usePhoneMockupCarousel.js";

const assetBase = "/assets/serenely";

const tags = ["UX Research", "UI Design", "Prototyping"];

const projectInfo = [
  { label: "Role", Icon: UserRound },
  { label: "Duration", Icon: CalendarDays },
  { label: "Tools", Icon: Settings }
];

const systemCards = [
  {
    title: "Match by Interests",
    body: "Connect volunteers with elderly patients based on shared hobbies, personalities, and values.",
    icon: "puzzle.png"
  },
  {
    title: "Find a Buddy",
    body: "Help volunteers find someone with whom they can share responsibilities and emotional support.",
    icon: "people.png"
  },
  {
    title: "Organize Support",
    body: "Keep visits, tasks, reminders, and patient information together in one clear workspace.",
    icon: "list.png"
  },
  {
    title: "Reflect & Remember",
    body: "Record moods, write journal entries, preserve memories, and share meaningful stories with the community.",
    icon: "book.png"
  }
];

const journeyScreens = [
  { title: "Welcome to Serenely", image: "1.svg" },
  { title: "Introduce Yourself", image: "2.svg" },
  { title: "Select Your Emotional Age", image: "3.svg" },
  { title: "Choose Your Interests", image: "4.svg" },
  { title: "Find a Volunteer Buddy", image: "5.svg" },
  { title: "Meet Your Patient", image: "6.svg" },
  { title: "Explore Their Story", image: "7.svg" },
  { title: "View Your Dashboard", image: "8.svg" },
  { title: "Manage Tasks", image: "9.svg" },
  { title: "Record Your Mood", image: "10.svg" },
  { title: "Create a Memory", image: "11.svg" },
  { title: "Share with the Community", image: "11.svg" }
];

const reflections = [
  {
    title: "What Worked Well?",
    body:
      "The interest-based matching and storytelling patient profiles helped create more personal and meaningful connections. Volunteers felt supported, informed, and more confident throughout the journey.",
    icon: "trophy.png"
  },
  {
    title: "What I've Learned?",
    body:
      "I learned how to design with empathy for sensitive and emotional contexts, the importance of cultural considerations, and how storytelling and reflection features can support user wellbeing.",
    icon: "star.png"
  },
  {
    title: "What Is Next?",
    body:
      "Focus on expanding the platform with volunteer scheduling, educational resources, secure communication, and stronger collaboration with hospice organizations.",
    icon: "bar-chart.png"
  }
];

function SectionTitle({ children }) {
  return <h3 className="serenely-section-title">{children}</h3>;
}

function SerenelyHero() {
  return (
    <section className="serenely-hero">
      <div className="serenely-hero-copy">
        <h2>Serenely</h2>
        <p className="serenely-kicker">Volunteer Hospice Support App</p>
        <p className="serenely-description">
          Serenely is a mobile application created during a university project in Shanghai, China. It was designed to support hospice volunteers by helping them find compatible elderly patients, connect with a volunteer buddy, organize their responsibilities, and preserve meaningful moments throughout their volunteering journey.
        </p>
        <p className="serenely-description">
          The app combines interest-based matching, personal patient stories, task management, mood tracking, journaling, and community sharing within one gentle and supportive experience. Its English and Chinese interfaces reflect the international and cultural setting in which the project was developed.
        </p>

        <div className="serenely-project-info" aria-label="Project information">
          {projectInfo.map(({ label, Icon }) => (
            <span key={label}>
              <Icon aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>

        <ProjectTags />
      </div>

      <div className="serenely-hero-phones" aria-label="Serenely app mockups">
        <img className="serenely-hero-phones-image" src={`${assetBase}/phones.svg`} alt="Serenely mobile app mockups" draggable="false" />
      </div>
    </section>
  );
}

function ProjectTags() {
  return (
    <div className="serenely-tag-list">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function ChallengeSolutionSection() {
  return (
    <div className="serenely-two-column">
      <article className="serenely-card serenely-text-card">
        <SectionTitle>The Challenge</SectionTitle>
        <p>
          Hospice volunteers, especially first-time volunteers, may feel emotionally unprepared, unsure how to connect with elderly patients, or isolated during the experience.
        </p>
      </article>
      <article className="serenely-card serenely-text-card">
        <SectionTitle>The Solution</SectionTitle>
        <p>
          A support app that guides volunteers through onboarding, matches them with suitable patients and volunteer buddies, organizes responsibilities, and helps them preserve meaningful memories.
        </p>
      </article>
    </div>
  );
}

function CareCenteredSystem() {
  return (
    <section className="serenely-system">
      <SectionTitle>How It Works / Care-Centered System</SectionTitle>
      <div className="serenely-system-grid">
        {systemCards.map((card) => (
          <article className="serenely-system-card" key={card.title}>
            <span className="serenely-system-icon">
              <img src={`${assetBase}/${card.icon}`} alt="" draggable="false" />
            </span>
            <h4>{card.title}</h4>

          </article>
        ))}
      </div>
    </section>
  );
}

function VolunteerJourney() {
  const rowRef = useRef(null);
  const { activePage, handleScroll, handleWheel, scrollToPage } = usePhoneMockupCarousel(rowRef, 3);

  return (
    <section className="serenely-card serenely-journey">
      <div className="serenely-journey-header">
        <SectionTitle>The Volunteer Journey</SectionTitle>
        <div className="serenely-journey-dots" aria-label="Serenely volunteer journey pages">
          {[0, 1, 2].map((index) => (
            <button
              type="button"
              className={activePage === index ? "is-active" : ""}
              aria-label={`Show Serenely journey page ${index + 1}`}
              aria-pressed={activePage === index}
              key={index}
              onClick={() => scrollToPage(index)}
            />
          ))}
        </div>
      </div>

      <div
        className="serenely-phone-row"
        aria-label="Serenely volunteer journey screens"
        onScroll={handleScroll}
        onWheel={handleWheel}
        ref={rowRef}
        tabIndex="0"
      >
        {journeyScreens.map((screen, index) => (
          <article className="serenely-phone-step" key={`${screen.title}-${index}`}>
            <h4>{screen.title}</h4>
            <img src={`${assetBase}/${screen.image}`} alt={`${screen.title} Serenely app screen`} draggable="false" />
          </article>
        ))}
      </div>
    </section>
  );
}

function ReflectionSection() {
  return (
    <section className="serenely-card serenely-outcomes">
      <SectionTitle>Outcome & Reflection</SectionTitle>
      <div className="serenely-outcome-grid">
        {reflections.map((item) => (
          <article className="serenely-outcome-item" key={item.title}>
            <span className="serenely-outcome-icon">
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

function SerenelyProjectPage() {
  return (
    <section className="serenely-case" id="serenely-overview">
      <div className="serenely-shell">
        <div className="serenely-top-border" aria-hidden="true" />
        <SerenelyHero />
        <ChallengeSolutionSection />
        <CareCenteredSystem />
        <VolunteerJourney />
        <ReflectionSection />
        <div className="serenely-bottom-border" aria-hidden="true" />
      </div>
    </section>
  );
}

export default SerenelyProjectPage;