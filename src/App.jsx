import './App.css';
import { usePageScroll } from './hooks/usePageScroll';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  const { registerSection } = usePageScroll();

  return (
    <>
      {/* Dynamic aurora background */}
      <div className="aurora-bg">
        <div className="aurora-orb aurora-orb--1" />
        <div className="aurora-orb aurora-orb--2" />
        <div className="aurora-orb aurora-orb--3" />
        <div className="aurora-orb aurora-orb--4" />
        <div className="aurora-orb aurora-orb--5" />
        <div className="aurora-orb aurora-orb--6" />
      </div>

      <Navbar />
      <main className="page-scroll-container">
        <div ref={registerSection} className="section section-hero" id="hero">
          <Hero />
        </div>
        <div ref={registerSection} className="section" id="about">
          <About />
        </div>
        <div ref={registerSection} className="section" id="skills">
          <Skills />
        </div>
        <div ref={registerSection} className="section" id="projects">
          <Projects />
        </div>
        <div ref={registerSection} className="section" id="achievements">
          <Achievements />
        </div>
        <div ref={registerSection} className="section" id="experience">
          <Experience />
        </div>
        <div ref={registerSection} className="section" id="contact">
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
