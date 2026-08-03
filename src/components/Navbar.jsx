import { useState } from "react";

const emailHref = "https://mail.google.com/mail/?view=cm&fs=1&to=milicatopic0904%40gmail.com";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "work", href: "#work" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#top" onClick={closeMenu}>
          MT.
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-menu ${isOpen ? "is-open" : ""}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="button button-pink nav-cta" href={emailHref} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Let's work together
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
