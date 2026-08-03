import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Curiosity from "./components/Curiosity.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="announcement-bar" aria-label="Current availability">
        <div className="announcement-track">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index}>
              Currently open to creative opportunities <b>*</b>
            </span>
          ))}
        </div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <Curiosity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
