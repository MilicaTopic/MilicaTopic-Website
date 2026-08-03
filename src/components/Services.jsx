import { Code2, LayoutTemplate, PackageCheck } from "lucide-react";

const services = [
  {
    Icon: LayoutTemplate,
    title: "UX/UI Design",
    text: "User flows, wireframes, high-fidelity interfaces, and interactive prototypes that feel natural and delightful."
  },
  {
    Icon: Code2,
    title: "Web Design & Development",
    text: "Responsive websites, clean frontend development, and thoughtful interaction design from concept to deployment."
  },
  {
    Icon: PackageCheck,
    title: "Creative Digital Products",
    text: "Turning concepts into useful, polished digital experiences - from first sketch to fully functional product."
  }
];

function Services() {
  return (
    <section className="services section dark-band">
      <div className="section-inner centered">
        <p className="eyebrow">What I do</p>
        <h2>
          What I bring <em>to the table.</em>
        </h2>
        <div className="service-grid">
          {services.map(({ Icon, title, text }) => (
            <article className="service-card" key={title}>
              <span className="service-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;