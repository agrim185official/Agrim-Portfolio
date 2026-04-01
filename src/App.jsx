import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    // Lock in-page scroll until the page touches the top
    const handleScroll = () => {
      document.querySelectorAll('.section').forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= 5) {
          section.classList.add('scroll-active');
        } else {
          section.classList.remove('scroll-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
