import { useRef, useState } from "react";
import { BarChart3, Edit3, Send, Settings2 } from "lucide-react";

const tags = ["UX Research", "UI Design", "Prototyping", "Mobile App Design", "App Development"];

const systemCards = [
  { title: "Create", Icon: Edit3 },
  { title: "Publish", Icon: Send },
  { title: "Analyse", Icon: BarChart3 },
  { title: "Manage", Icon: Settings2 }
];

const journeyScreens = [
  { title: "Welcome", image: "/assets/coco/journey-1.svg" },
  { title: "Dashboard", image: "/assets/coco/journey-2.svg" },
  { title: "Create Post", image: "/assets/coco/journey-3.svg" },
  { title: "Upload Media", image: "/assets/coco/journey-4.svg" },
  { title: "Media Decision", image: "/assets/coco/journey-5.svg" },
  { title: "Media Decision", image: "/assets/coco/journey-6.svg" },
  { title: "Activity", image: "/assets/coco/journey-7.svg" },
  { title: "Analytics", image: "/assets/coco/journey-8.svg" },
  { title: "Messages", image: "/assets/coco/journey-9.svg" },
  { title: "Account Settings", image: "/assets/coco/journey-10.svg" }
];

const reflections = [
  {
    title: "What worked well?",
    body: "Designed a complete mobile social media management platform that brings content creation, publishing, analytics, messaging, and account management into one centralized experience.",
    Icon: Edit3
  },
  {
    title: "What I've learned?",
    body: "This project strengthened my understanding of designing feature-rich mobile applications and organizing complex information into clear, accessible user flows.",
    Icon: BarChart3
  },
  {
    title: "Future Improvements",
    body: "With more time, I would validate the design through usability testing with small business owners and content creators.",
    Icon: Settings2
  }
];

function SectionTitle({ children }) {
  return <h3 className="coco-section-title">{children}</h3>;
}

function CocoHero() {
  return (
    <section className="coco-hero">
      <div className="coco-hero-copy">
        <h2>COCO One</h2>
        <p className="coco-kicker">Social Media Management App</p>
        <p className="coco-description">
          A social media management app that helps small businesses create, publish, organize, and monitor content across multiple platforms from one central workspace
        </p>
        <div className="coco-tag-list">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className="coco-hero-phones" aria-label="COCO app mockups">
        <img className="coco-hero-image" src="/assets/coco/hero-phones.svg" alt="COCO One mobile app mockups" />
      </div>
    </section>
  );
}

function ChallengeSolution() {
  return (
    <div className="coco-two-column">
      <article className="coco-card coco-text-card">
        <SectionTitle>The Challenge</SectionTitle>
        <p>Managing several social media platforms separately can be time consuming and confusing for small business owner, especially when creating content, checking performance, and responding to messages.</p>
      </article>
      <article className="coco-card coco-text-card">
        <SectionTitle>The Solution</SectionTitle>
        <p>A centralized mobile workspace that simplifies content creation, publishing, analytics, communication, and account managment across multiple social platforms.</p>
      </article>
    </div>
  );
}

function VisualSystem() {
  return (
    <section className="coco-card coco-visual-system">
      <SectionTitle>How It Works / Visual System</SectionTitle>
      <div className="coco-system-grid">
        {systemCards.map(({ title, Icon }) => (
          <article className="coco-system-card" key={title}>
            <Icon aria-hidden="true" />
            <h4>{title}</h4>
          </article>
        ))}
      </div>
    </section>
  );
}

function UserJourney() {
  const rowRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  function updateActivePage(element) {
    const maxScroll = element.scrollWidth - element.clientWidth;
    if (maxScroll <= 0) {
      setActivePage(0);
      return;
    }
    setActivePage(Math.min(2, Math.round((element.scrollLeft / maxScroll) * 2)));
  }

  function handleJourneyScroll(event) {
    updateActivePage(event.currentTarget);
  }

  function handleJourneyWheel(event) {
    const row = event.currentTarget;
    const maxScroll = row.scrollWidth - row.clientWidth;

    if (event.ctrlKey || maxScroll <= 0) {
      return;
    }

    const rawDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    const wheelDelta = event.deltaMode === 1 ? rawDelta * 24 : rawDelta;

    if (!wheelDelta) {
      return;
    }

    const nextScroll = Math.max(0, Math.min(maxScroll, row.scrollLeft + wheelDelta));

    if (nextScroll === row.scrollLeft) {
      return;
    }

    row.scrollLeft = nextScroll;
    updateActivePage(row);
    event.preventDefault();
  }

  function scrollToPage(index) {
    const row = rowRef.current;
    if (!row) return;
    const maxScroll = row.scrollWidth - row.clientWidth;
    row.scrollTo({ left: (maxScroll / 2) * index, behavior: "smooth" });
    setActivePage(index);
  }

  return (
    <section className="coco-card coco-journey">
      <div className="coco-journey-header">
        <SectionTitle>User App Journey</SectionTitle>
        <div className="coco-journey-dots" aria-label="COCO journey pages">
          {[0, 1, 2].map((index) => (
            <button
              type="button"
              className={activePage === index ? "is-active" : ""}
              aria-label={`Show COCO journey page ${index + 1}`}
              aria-pressed={activePage === index}
              key={index}
              onClick={() => scrollToPage(index)}
            />
          ))}
        </div>
      </div>
      <div
        className="coco-phone-row"
        aria-label="COCO user app journey screens"
        onScroll={handleJourneyScroll}
        onWheel={handleJourneyWheel}
        ref={rowRef}
        tabIndex="0"
      >
        {journeyScreens.map((screen) => (
          <article className="coco-journey-phone" key={screen.title}>
            <h4>{screen.title}</h4>
            <img src={screen.image} alt={`${screen.title} COCO app screen`} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="coco-card coco-outcomes">
      <SectionTitle>Outcomes & Reflection</SectionTitle>
      <div className="coco-outcome-grid">
        {reflections.map(({ title, body, Icon }) => (
          <article className="coco-outcome-item" key={title}>
            <span><Icon aria-hidden="true" /></span>
            <div>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CocoPage() {
  return (
    <section className="coco-case" id="coco-overview">
      <div className="coco-shell">
        <div className="coco-top-border" aria-hidden="true" />
        <CocoHero />
        <ChallengeSolution />
        <VisualSystem />
        <UserJourney />
        <Outcomes />
        <div className="coco-bottom-border" aria-hidden="true" />
      </div>
    </section>
  );
}

export default CocoPage;