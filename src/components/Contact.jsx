import { Mail, Sparkle } from "lucide-react";
const emailHref = "https://mail.google.com/mail/?view=cm&fs=1&to=milicatopic0904%40gmail.com";

const contacts = [
  { label: "milicatopic0904@gmail.com", href: emailHref },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/milica-topic" },
  { label: "GitHub", href: "https://github.com/MilicaTopic" }
];

function Contact() {
  return (
    <section className="contact section dark-band" id="contact">
      <div className="contact-glow glow-one" />
      <div className="contact-glow glow-two" />
      <div className="contact-stars" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((star) => (
          <Sparkle className={`contact-star star-${star}`} key={star} aria-hidden="true" />
        ))}
      </div>
      <div className="section-inner centered contact-inner">
        <p className="eyebrow">Get in touch</p>
        <h2>
          Have an idea? <em>Let's make it real.</em>
        </h2>
        <p className="contact-text">
          I'm always excited to collaborate on thoughtful, creative, and meaningful digital
          projects.
        </p>
        <a className="button button-pink contact-button" href={emailHref} target="_blank" rel="noreferrer">
          <Mail className="button-icon" aria-hidden="true" />
          Get in touch
        </a>
        <div className="contact-pills">
          {contacts.map((contact) => (
            <a href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
              {contact.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;



