import { useEffect, useState } from "react";
import { X } from "lucide-react";
import CocoPage from "./coco/CocoPage.jsx";
import DeutschGeniePage from "./deutschgenie/DeutschGeniePage.jsx";
import SerenelyPage from "./serenely/SerenelyPage.jsx";
import { projects } from "../data/projects.js";

const featuredProject = projects.find((project) => project.featured);
const mainProjects = projects.filter((project) => ["COCO one", "Serenely"].includes(project.name));
const supportingProjects = projects.filter(
  (project) => !project.featured && !mainProjects.includes(project)
);

function ProjectImage({ project }) {
  if (project.hidePreviewImage) {
    return null;
  }

  if (project.image) {
    return <img className={`${project.coverImage ? "project-cover-image" : ""} project-image-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} src={project.image} alt={`${project.name} project preview`} />;
  }

  return (
    <div className={`image-placeholder ${project.plainPlaceholder ? "plain-placeholder" : ""}`} role="img" aria-label={`${project.name} image placeholder`}>
      <span>{project.plainPlaceholder ? project.placeholder : `[${project.placeholder}]`}</span>
    </div>
  );
}

function ProjectCard({ project, index, onOpenCaseStudy }) {
  const opensModal = Boolean(project.caseStudyModal && onOpenCaseStudy);
  const showProjectLink = opensModal || Boolean(project.projectUrl);

  function handleCardClick(event) {
    if (!opensModal || event.target.closest("a, button")) {
      return;
    }

    onOpenCaseStudy();
  }

  return (
    <article
      className={`project-card ${project.featured ? "featured" : ""} ${project.color} ${opensModal ? "project-card-clickable" : ""} ${project.hidePreviewImage ? "no-preview-image" : ""}`}
      onClick={handleCardClick}
    >
      {project.featured && <span className="featured-pill">Featured</span>}
      <ProjectImage project={project} />
      <div className="project-content">
        <div className="project-topline">
          <span>{project.group}</span>
          <span>{project.year}</span>
        </div>
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-role">{project.role}</p>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {showProjectLink && (
          opensModal ? (
            <button type="button" className="case-link case-button" onClick={onOpenCaseStudy}>
              View project -&gt;
            </button>
          ) : (
            <a href={project.projectUrl || `#project-${index + 1}`} className="case-link">
              View project -&gt;
            </a>
          )
        )}
      </div>
    </article>
  );
}

function CaseStudyModal({ isOpen, onClose, title, variant, children }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="dg-modal" role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="dg-modal-backdrop" aria-label={`Close ${title}`} onClick={onClose} />
      <div className={`dg-modal-panel ${variant ? `modal-${variant}` : ""}`}>
        <button type="button" className="dg-modal-close" aria-label={`Close ${title}`} onClick={onClose}>
          <X aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>
  );
}

function Projects() {
  const [isDeutschGenieOpen, setIsDeutschGenieOpen] = useState(false);
  const [isCocoOpen, setIsCocoOpen] = useState(false);
  const [isSerenelyOpen, setIsSerenelyOpen] = useState(false);

  function getProjectModalHandler(project) {
    if (project.caseStudyModal === "deutschgenie" || project.caseStudyModal === true) {
      return () => setIsDeutschGenieOpen(true);
    }

    if (project.caseStudyModal === "coco") {
      return () => setIsCocoOpen(true);
    }

    if (project.caseStudyModal === "serenely") {
      return () => setIsSerenelyOpen(true);
    }

    return undefined;
  }

  return (
    <>
      <section className="projects section" id="work">
        <div className="section-inner">
          <p className="eyebrow with-line">Work</p>
          <h2>
            Selected work, <em>made with care.</em>
          </h2>
          <p className="projects-intro">
            A selection of UX/UI, app, web, and strategy projects shaped through research, thoughtful
            structure, and playful visual systems.
          </p>

          <div className="project-overview">
            <div className="project-group featured-group">
              <p className="project-group-label">Start here</p>
              <ProjectCard project={featuredProject} index={0} onOpenCaseStudy={getProjectModalHandler(featuredProject)} />
            </div>

            <div className="project-group">
              <p className="project-group-label">Product & app design</p>
              <div className="project-row main-projects">
                {mainProjects.map((project, index) => (
                  <ProjectCard
                    project={project}
                    index={index + 1}
                    key={project.name}
                    onOpenCaseStudy={getProjectModalHandler(project)}
                  />
                ))}
              </div>
            </div>

            <div className="project-group">
              <p className="project-group-label">Supporting projects</p>
              <div className="project-row supporting-projects">
                {supportingProjects.map((project, index) => (
                  <ProjectCard project={project} index={index + 3} key={project.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseStudyModal isOpen={isDeutschGenieOpen} onClose={() => setIsDeutschGenieOpen(false)} title="DeutschGenie case study" variant="deutschgenie">
        <DeutschGeniePage />
      </CaseStudyModal>
      <CaseStudyModal isOpen={isCocoOpen} onClose={() => setIsCocoOpen(false)} title="COCO One case study" variant="coco">
        <CocoPage />
      </CaseStudyModal>
      <CaseStudyModal isOpen={isSerenelyOpen} onClose={() => setIsSerenelyOpen(false)} title="Serenely case study" variant="serenely">
        <SerenelyPage />
      </CaseStudyModal>
    </>
  );
}

export default Projects;